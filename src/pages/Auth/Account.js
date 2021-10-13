import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Formik, Field } from "formik";

import * as actions from "../../store/actions";
import Message from "../../components/Main/Message";
import Button from "../../components/Main/Button";
import Input from "../../components/Main/Input";
import Modal from "../../components/Modal/Modal";
import ProfileSchema from "../../schemas/ProfileSchema";
import { HeadingContainer } from "../../components/containers/Heading";
import { FormContainer } from "../../components/containers/Form";
import { StyledForm } from "../../components/Main/Form";
import { FormButtonsContainer } from "../../components/containers/Buttons";
import {
	ProfileMessageContainer,
	ProfileDeleteContainer,
} from "../../components/containers/Message";
import FormBackgroundContainer from "../../components/Main/FormBackgroundContainer";

const Account = ({
	firebase,
	editProfile,
	loading,
	error,
	loadingDelete,
	errorDelete,
	deleteUser,
	cleanUp,
}) => {
	useEffect(() => {
		return () => {
			cleanUp();
		};
	}, [cleanUp]);

	const [modalOpened, setModalOpened] = useState(false);

	if (!firebase.profile.isLoaded) return null;
	return (
		<>
			<Formik
				initialValues={{
					firstName: firebase.profile.firstName,
					lastName: firebase.profile.lastName,
					email: firebase.auth.email,
					password: "",
					confirmPassword: "",
				}}
				validationSchema={ProfileSchema}
				onSubmit={async (values, { setSubmitting }) => {
					// edit the profile here
					await editProfile(values);
					setSubmitting(false);
				}}
			>
				{({ isSubmitting, isValid }) => (
					<FormContainer>
						<FormBackgroundContainer>
							<HeadingContainer>
								<h1>Account</h1>
								<p>Edit your account informations.</p>
							</HeadingContainer>
						</FormBackgroundContainer>
						<StyledForm>
							<Field
								type="text"
								name="firstName"
								placeholder="First name"
								component={Input}
							/>
							<Field
								type="text"
								name="lastName"
								placeholder="Last name"
								component={Input}
							/>
							<Field
								type="email"
								name="email"
								placeholder="Email"
								component={Input}
							/>
							<Field
								type="password"
								name="password"
								placeholder="Password"
								component={Input}
							/>
							<Field
								type="password"
								name="confirmPassword"
								placeholder="Re-type your password"
								component={Input}
							/>
							<Button
								disabled={!isValid || isSubmitting}
								loading={loading ? "Editing..." : null}
								type="submit"
							>
								Edit
							</Button>
							<ProfileMessageContainer>
								<Message error show={error}>
									{error}
								</Message>
							</ProfileMessageContainer>
							<ProfileMessageContainer>
								<Message success show={error === false}>
									Profile was updated!
								</Message>
							</ProfileMessageContainer>
							<ProfileDeleteContainer
								stage="error"
								onClick={() => setModalOpened(true)}
							>
								Delete my profile
							</ProfileDeleteContainer>
						</StyledForm>
					</FormContainer>
				)}
			</Formik>
			<Modal opened={modalOpened} close={() => setModalOpened(false)}>
				<FormBackgroundContainer>
					<HeadingContainer>
						<h1>Delete your account</h1>
						<p>Do you really want to delete your account?</p>
					</HeadingContainer>
				</FormBackgroundContainer>
				<FormButtonsContainer>
					<Button
						contain
						onClick={() => deleteUser()}
						color="red"
						disabled={loadingDelete}
						loading={loadingDelete ? "Deleting..." : null}
					>
						Delete
					</Button>
					<Button color="main" contain onClick={() => setModalOpened(false)}>
						Cancel
					</Button>
					<Message error show={errorDelete}>
						{errorDelete}
					</Message>
				</FormButtonsContainer>
			</Modal>
		</>
	);
};

const mapStateToProps = ({ firebase, auth }) => ({
	firebase,
	loading: auth.profileEdit.loading,
	error: auth.profileEdit.error,
	loadingDelete: auth.deleteUser.loading,
	errorDelete: auth.deleteUser.error,
});

const mapDispatchToProps = {
	editProfile: actions.editProfile,
	cleanUp: actions.clean,
	deleteUser: actions.deleteUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(Account);
