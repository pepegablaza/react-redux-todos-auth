import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Formik, Field } from "formik";

import * as actions from "../../store/actions";
import Message from "../../components/Main/Message";
import Button from "../../components/Main/Button";
import Heading from "../../components/Main/Heading";
import Input from "../../components/Main/Input";
import Modal from "../../components/Modal/Modal";
import ProfileSchema from "../../schemas/ProfileSchema";
import {
	ProfileMessageWrapper,
	ProfileDeleteWrapper,
} from "../../layout/elements/Messages";
import {
	DeleteProfileButtonsContainer,
	ProfileButtonsWrapper,
} from "../../layout/elements/Buttons";
import { FormContainer, StyledForm } from "../../layout/elements/Forms";
import FormBannerContainer from "../../components/Main/FormBannerContainer";
import { VerifyContainer } from "../../layout/elements/Main";

const Profile = ({
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
						<FormBannerContainer>
							<Heading bold size="h1" color="white">
								Profile
							</Heading>
							<Heading size="h3" color="white">
								Edit your profile informations.
							</Heading>
						</FormBannerContainer>
						<StyledForm>
							<Field
								type="text"
								name="firstName"
								placeholder="Your first name..."
								component={Input}
							/>
							<Field
								type="text"
								name="lastName"
								placeholder="Your last name..."
								component={Input}
							/>
							<Field
								type="email"
								name="email"
								placeholder="Your email..."
								component={Input}
							/>
							<Field
								type="password"
								name="password"
								placeholder="Your password..."
								component={Input}
							/>
							<Field
								type="password"
								name="confirmPassword"
								placeholder="Re-type your password..."
								component={Input}
							/>
							<Button
								disabled={!isValid || isSubmitting}
								loading={loading ? "Editing..." : null}
								type="submit"
							>
								Edit
							</Button>
							<ProfileMessageWrapper>
								<Message error show={error}>
									{error}
								</Message>
							</ProfileMessageWrapper>
							<ProfileMessageWrapper>
								<Message success show={error === false}>
									Profile was updated!
								</Message>
							</ProfileMessageWrapper>
							<ProfileDeleteWrapper
								stage="error"
								onClick={() => setModalOpened(true)}
							>
								Delete my profile
							</ProfileDeleteWrapper>
						</StyledForm>
					</FormContainer>
				)}
			</Formik>
			<Modal opened={modalOpened} close={() => setModalOpened(false)}>
				<FormBannerContainer>
					<Heading noMargin size="h1" color="white">
						Delete your account
					</Heading>
					<Heading bold size="h4" color="white">
						Do you really want to delete your account?
					</Heading>
				</FormBannerContainer>
				<DeleteProfileButtonsContainer>
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
				</DeleteProfileButtonsContainer>
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

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
