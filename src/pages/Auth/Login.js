import React, { useEffect } from "react";
import { Formik, Field } from "formik";
import { connect } from "react-redux";

import * as actions from "../../store/actions";
import LoginSchema from "../../schemas/LoginSchema";
import Input from "../../components/Main/Input";
import Button from "../../components/Main/Button";
import Heading from "../../components/Main/Heading";
import Message from "../../components/Main/Message";
import { FormContainer, StyledForm } from "../../layout/elements/Forms";
import FormBannerContainer from "../../components/Main/FormBannerContainer";
import { LoginMessageWrapper } from "../../layout/elements/Messages";
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
					<FormBannerContainer>
						<Heading bold size="h1" color="white">
							Login
						</Heading>
						<Heading size="h3" color="white">
							Login with your existing account. You dont have an account?
							<Link to="/signup">
								<Heading noMargin size="h3" bold color="white">
									Sign up here.
								</Heading>
							</Link>
						</Heading>
					</FormBannerContainer>
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
							<LoginMessageWrapper stage="success">
								Forgot password
							</LoginMessageWrapper>
						</Link>
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
	login: actions.signIn,
	cleanUp: actions.clean,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
