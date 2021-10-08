import styled from "styled-components";

//Message
export const P = styled.p`
	font-weight: 700;
	font-size: 1.2rem;
	color: ${({ error, success }) => {
		if (error) return "var(--color-errorRed)";
		if (success) return "green";
		else return "var(--color-main)";
	}};
	opacity: ${({ show }) => (show ? "1" : "0")};
	transform: translateY(${({ show }) => (show ? "30px" : "0px")});
	text-align: center;
	transition: all 0.2s;
`;

export const LoginMessageWrapper = styled.div`
	position: absolute;
	bottom: 0;
`;

export const ProfileMessageWrapper = styled.div`
	position: absolute;
	bottom: 2rem;
	width: 100%;
	padding: 0 3rem;
`;

export const ProfileDeleteWrapper = styled.div`
	cursor: pointer;
	color: var(--color-errorRed);
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
