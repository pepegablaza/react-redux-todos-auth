import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Formik, Field } from "formik";
import * as actions from "../../store/actions";

import Input from "../../components/Main/Input";
import Button from "../../components/Main/Button";
import { HeadingContainer } from "../../components/containers/Heading";
import Message from "../../components/Main/Message";
import SignUpSchema from "../../schemas/SignUpSchema";
import { StyledForm } from "../../components/Main/Form";
import { FormContainer } from "../../components/containers/Form";
import { MessagesContainer } from "../../components/containers/Message";
import FormBackgroundContainer from "../../components/Main/FormBackgroundContainer";

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
					<FormBackgroundContainer>
						<HeadingContainer>
							<h1>Sign up</h1>
							<p>Fill in your details to register your new account.</p>
						</HeadingContainer>
					</FormBackgroundContainer>
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
						<MessagesContainer>
							<Message error show={error}>
								{error}
							</Message>
						</MessagesContainer>
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
