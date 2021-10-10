import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Formik, Field } from "formik";
import * as actions from "../../store/actions";

import Input from "../../components/Main/Input";
import Button from "../../components/Main/Button";
import Heading from "../../components/Main/Heading";
import Message from "../../components/Main/Message";
import SignUpSchema from "../../schemas/SignUpSchema";
import { LoginMessageWrapper } from "../../layout/elements/Messages";
import {
	FormBanner,
	FormContainer,
	StyledForm,
} from "../../layout/elements/Forms";
import Waves from "../../components/Main/Waves";

const SignUp = ({ signUp, loading, error, cleanUp }) => {
	useEffect(() => {
		return () => {
			cleanUp();
		};
	}, [cleanUp]);

	return (
		<Formik
			initialValues={{
				firstName: "",
				lastName: "",
				email: "",
				password: "",
				confirmPassword: "",
			}}
			validationSchema={SignUpSchema}
			onSubmit={async (values, { setSubmitting }) => {
				await signUp(values);
				setSubmitting(false);
			}}
		>
			{({ isSubmitting, isValid }) => (
				<FormContainer>
					<FormBanner>
						<Heading noMargin size="h1" color="white">
							Sign up
						</Heading>
						<Heading bold size="h4" color="white">
							Fill in your details to register your new account.
						</Heading>
						<Waves />
					</FormBanner>
					<StyledForm>
						<Field
							type="text"
							name="firstName"
							placeholder="First Name"
							component={Input}
						/>
						<Field
							type="text"
							name="lastName"
							placeholder="Last Name"
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
							placeholder="Re-type Password"
							component={Input}
						/>
						<Button
							disabled={!isValid || isSubmitting}
							loading={loading ? "Signing up..." : null}
							type="submit"
						>
							Sign up
						</Button>
						<LoginMessageWrapper>
							<Message error show={error}>
								{error}
							</Message>
						</LoginMessageWrapper>
					</StyledForm>
				</FormContainer>
			)}
		</Formik>
	);
};

const mapStateToProps = ({ auth }) => ({
	loading: auth.loading,
	error: auth.error,
});

const mapDispatchToProps = {
	signUp: actions.signUp,
	cleanUp: actions.clean,
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
