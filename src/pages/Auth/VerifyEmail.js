import React, { useEffect } from "react";
import * as actions from "../../store/actions";
import { connect } from "react-redux";

import { FormButtonsContainer } from "../../components/containers/Buttons";
import Message from "../../components/Main/Message";
import Button from "../../components/Main/Button";
import Heading from "../../components/Main/Heading";
import { FormContainer } from "../../components/containers/Form";
import FormBackgroundContainer from "../../components/Main/FormBackgroundContainer";

const VerifyEmail = ({ sendVerification, error, loading, cleanUp }) => {
	useEffect(() => {
		return () => {
			cleanUp();
		};
	}, [cleanUp]);
	return (
		<FormContainer>
			<FormBackgroundContainer>
				<Heading color="white" noMargin size="h1">
					Verify your email
				</Heading>
				<Heading color="white" bold size="h4">
					To gain all access, go to your inbox and verify your e-mail
				</Heading>
			</FormBackgroundContainer>
			<FormButtonsContainer>
				<Button
					loading={loading ? "Sending email..." : null}
					disabled={loading}
					onClick={() => sendVerification()}
				>
					Re-send verification email
				</Button>
				<Message error show={error}>
					{error}
				</Message>

				<Message success show={error === false}>
					Message sent successfully
				</Message>
			</FormButtonsContainer>
		</FormContainer>
	);
};

const mapStateToProps = ({ auth }) => ({
	loading: auth.verifyEmail.loading,
	error: auth.verifyEmail.error,
});

const mapDispatchToProps = {
	sendVerification: actions.verifyEmail,
	cleanUp: actions.clean,
};

export default connect(mapStateToProps, mapDispatchToProps)(VerifyEmail);
