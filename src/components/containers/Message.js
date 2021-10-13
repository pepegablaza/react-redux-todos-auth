import styled from "styled-components";

//Container for messages

export const MessagesContainer = styled.div`
	cursor: pointer;
	color: var(--color-mainDark);
	font-size: 1.3rem;
	font-weight: 700;
	margin-top: 2rem;
	transition: all 0.2s;
	&:hover {
		transform: translateY(-3px);
	}
	&:active {
		transform: translateY(2px);
	}
`;

//Container for Profile actions message
export const ProfileMessageContainer = styled.div`
	position: absolute;
	bottom: 2rem;
	width: 100%;
	padding: 0 3rem;
`;
//Container for profile delete message

export const ProfileDeleteContainer = styled.div`
	cursor: pointer;
	color: ${({ stage }) => {
		if (stage === "error") return "var(--color-errorRed)";
		if (stage === "success") return "green";
		else return "var(--color-main)";
	}};
	font-size: 1.3rem;
	font-weight: 700;
	margin-top: 2rem;
	transition: all 0.2s;
	&:hover {
		transform: translateY(-3px);
	}
	&:active {
		transform: translateY(2px);
	}
`;

export const RecoverMessageWrapper = styled.div`
	position: absolute;
	bottom: 0;
`;

export const SignUpMessageWrapper = styled.div`
	position: absolute;
	bottom: 0;
`;

export const VerifyMessageWrapper = styled.div`
	position: absolute;
	bottom: 0;
`;

export const DeleteMessageWrapper = styled.div`
	position: absolute;
	bottom: 2rem;
	width: 100%;
	padding: 0 3rem;
`;
export const InputTodoMessageWrapper = styled.div`
	position: absolute;
	bottom: 0;
	width: 100%;
	padding: 0 3rem;
`;
