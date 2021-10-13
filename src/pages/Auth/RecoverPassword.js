import React from "react";
import { connect } from "react-redux";
import { Formik, Field } from "formik";

import * as actions from "../../store/actions";
import RecoverSchema from "../../schemas/RecoverSchema";
import Heading from "../../components/Main/Heading";
import Input from "../../components/Main/Input";
import Button from "../../components/Main/Button";
import Message from "../../components/Main/Message";
import { StyledForm } from "../../components/Main/Form";
import { FormContainer } from "../../components/containers/Form";
import { MessagesContainer } from "../../components/containers/Message";
import FormBackgroundContainer from "../../components/Main/FormBackgroundContainer";

const RecoverPassword = ({ error, loading, sendEmail }) => {
	return (
		<Formik
			initialValues={{
				email: "",
			}}
			validationSchema={RecoverSchema}
			onSubmit={async (values, { setSubmitting }) => {
				await sendEmail(values);
				setSubmitting(false);
			}}
		>
			{({ isSubmitting, isValid }) => (
				<FormContainer>
					<FormBackgroundContainer>
						<Heading bold size="h1" color="white">
							Recover Password
						</Heading>
						<Heading size="h3" color="white">
							Enter your email to recover password
						</Heading>
					</FormBackgroundContainer>
					<StyledForm>
						<Field
							type="email"
							name="email"
							placeholder="Type your email..."
							component={Input}
						/>
						<Button
							disabled={!isValid || isSubmitting}
							loading={loading ? "Sending recover email..." : null}
							type="submit"
						>
							Recover Password
						</Button>
						<MessagesContainer>
							<Message error show={error}>
								{error}
							</Message>
						</MessagesContainer>
						<MessagesContainer>
							<Message success show={error === false}>
								Recover email sent successfully
							</Message>
						</MessagesContainer>
					</StyledForm>
				</FormContainer>
			)}
		</Formik>
	);
};

const mapStateToProps = ({ auth }) => ({
	loading: auth.recoverPassword.loading,
	error: auth.recoverPassword.error,
});

const mapDispatchToProps = {
	sendEmail: actions.recoverPassword,
};

export default connect(mapStateToProps, mapDispatchToProps)(RecoverPassword);
