import React, { useEffect } from "react";
import * as actions from "../../store/actions";
import { connect } from "react-redux";

import { VerifyWrapper, VerifyMessageWrapper } from "../../layout/elements";
import { FormWrapper } from "../../layout/elements/Forms";
import Message from "../../components/Main/Message";
import Button from "../../components/Main/Button";
import Heading from "../../components/Main/Heading";

const VerifyEmail = ({ sendVerification, error, loading, cleanUp }) => {
	useEffect(() => {
		return () => {
			cleanUp();
		};
	}, [cleanUp]);
	return (
		<FormWrapper>
			<VerifyWrapper>
				<Heading color="white" noMargin size="h1">
					Verify your email
				</Heading>
				<Heading color="white" bold size="h4">
					Go to your email inbox,and please verify your email
				</Heading>
				<Button
					loading={loading ? "Sending email..." : null}
					disabled={loading}
					onClick={() => sendVerification()}
				>
					Re-send verification email
				</Button>
				<VerifyMessageWrapper>
					<Message error show={error}>
						{error}
					</Message>
				</VerifyMessageWrapper>
				<VerifyMessageWrapper>
					<Message success show={error === false}>
						Message sent successfully
					</Message>
				</VerifyMessageWrapper>
			</VerifyWrapper>
		</FormWrapper>
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
