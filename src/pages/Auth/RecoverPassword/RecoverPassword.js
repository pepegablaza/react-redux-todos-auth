import React from "react";
import styled from "styled-components";
import * as Yup from "yup";
import * as actions from "../../../store/actions";
import { connect } from "react-redux";
import { Formik, Field } from "formik";
import { FormWrapper, StyledForm } from "../../../layout/elements";
import Heading from "../../../components/Main/Headings/Heading";
import Input from "../../../components/Main/Forms/Input";
import Button from "../../../components/Main/Forms/Button";
import Message from "../../../components/Main/Message/Message";

const MessageWrapper = styled.div`
	position: absolute;
	bottom: 0;
`;

const RecoverSchema = Yup.object().shape({
	email: Yup.string()
		.email("Invalid email.")
		.required("The email is required."),
});

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
				<FormWrapper>
					<Heading size="h1" noMargin color="white">
						Recover your password
					</Heading>
					<Heading size="h4" bold color="white">
						Type in your e-mail to recover your password
					</Heading>
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
							Recover Email
						</Button>
						<MessageWrapper>
							<Message error show={error}>
								{error}
							</Message>
						</MessageWrapper>
						<MessageWrapper>
							<Message success show={error === false}>
								Recover email sent successfully
							</Message>
						</MessageWrapper>
					</StyledForm>
				</FormWrapper>
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
