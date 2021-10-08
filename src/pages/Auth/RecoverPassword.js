import React from "react";
import { connect } from "react-redux";
import { Formik, Field } from "formik";

import * as actions from "../../store/actions";
import RecoverSchema from "../../schemas/RecoverSchema";
import Heading from "../../components/Main/Heading";
import Input from "../../components/Main/Input";
import Button from "../../components/Main/Button";
import Message from "../../components/Main/Message";
import { RecoverMessageWrapper } from "../../layout/elements/Messages";
import { FormWrapper, StyledForm } from "../../layout/elements/Forms";

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
						<RecoverMessageWrapper>
							<Message error show={error}>
								{error}
							</Message>
						</RecoverMessageWrapper>
						<RecoverMessageWrapper>
							<Message success show={error === false}>
								Recover email sent successfully
							</Message>
						</RecoverMessageWrapper>
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
