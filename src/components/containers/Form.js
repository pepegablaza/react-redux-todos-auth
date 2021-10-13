import styled from "styled-components";

//Form Container
export const FormContainer = styled.div`
	width: 60%;
	max-width: 1100px;
	height: 560px;
	min-height: 65vh;
	margin: 0 auto;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: white;
	border-top-right-radius: 2rem 2rem;
	border-bottom-right-radius: 2rem 2rem;
	@media ${(props) => props.theme.mediaQueries.medium} {
		flex-direction: column;
		height: 80vh;
	}
	@media ${(props) => props.theme.mediaQueries.small} {
		width: 100%;
		height: 100vh;
	}
`;

//Non form container
export const VerifyContainer = styled.div`
	width: 50%;
	height: 100%;
	display: flex;
	flex-direction: column;
	padding: 1rem;
	justify-content: center;
`;
