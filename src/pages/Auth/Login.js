import React, { useEffect } from "react";
import { Formik, Field } from "formik";
import { connect } from "react-redux";

import * as actions from "../../store/actions";
import LoginSchema from "../../schemas/LoginSchema";
import Input from "../../components/Main/Input";
import Button from "../../components/Main/Button";
import Heading from "../../components/Main/Heading";
import Message from "../../components/Main/Message";
import { FormWrapper, StyledForm } from "../../layout/elements/Forms";
import { LoginMessageWrapper } from "../../layout/elements/Messages";

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
				<FormWrapper>
					<Heading noMargin size="h1" color="white">
						Login into your account
					</Heading>
					<Heading bold size="h4" color="white">
						Fill in your details to login into your account
					</Heading>
					<StyledForm>
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
						<Button
							disabled={!isValid || isSubmitting}
							loading={loading ? "Logging in..." : null}
							type="submit"
						>
							Login
						</Button>
						<LoginMessageWrapper>
							<Message error show={error}>
								{error}
							</Message>
						</LoginMessageWrapper>
					</StyledForm>
				</FormWrapper>
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
