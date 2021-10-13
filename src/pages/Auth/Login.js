import React, { useEffect } from "react";
import { Formik, Field } from "formik";
import { connect } from "react-redux";

import * as actions from "../../store/actions";
import LoginSchema from "../../schemas/LoginSchema";
import Input from "../../components/Main/Input";
import Button from "../../components/Main/Button";
import Heading from "../../components/Main/Heading";
import { HeadingContainer } from "../../components/containers/Heading";
import Message from "../../components/Main/Message";
import { FormContainer } from "../../components/containers/Form";
import { StyledForm } from "../../components/Main/Form";
import { MessagesContainer } from "../../components/containers/Message";
import FormBackgroundContainer from "../../components/Main/FormBackgroundContainer";
import { Link } from "react-router-dom";

const Login = ({ login, loading, error, cleanUp }) => {
	useEffect(() => {
		return () => {
			cleanUp();
		};
	}, [cleanUp]);

	return (
		<Formik
			initialValues={{
				email: "",
				password: "",
			}}
			validationSchema={LoginSchema}
			onSubmit={async (values, { setSubmitting }) => {
				await login(values);
				setSubmitting(false);
			}}
		>
			{({ isSubmitting, isValid }) => (
				<FormContainer>
					<FormBackgroundContainer>
						<HeadingContainer>
							<h1>Login</h1>
							<p>
								Login with your existing account. You dont have an account?
								<Link to="/signup" style={{ textDecoration: "underline" }}>
									Sign up here
								</Link>
								.
							</p>
						</HeadingContainer>
					</FormBackgroundContainer>
					<StyledForm>
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
						<Button
							disabled={!isValid || isSubmitting}
							loading={loading ? "Logging in..." : null}
							type="submit"
						>
							Login
						</Button>

						<Heading noMargin color="dark" size="h3">
							Forgot your password?
						</Heading>
						<Link to="/recover">
							<MessagesContainer stage="success">
								Forgot password
							</MessagesContainer>
						</Link>
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
	login: actions.signIn,
	cleanUp: actions.clean,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
