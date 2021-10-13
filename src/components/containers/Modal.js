import styled from "styled-components";

//Backdrop container for backdrop component
export const BackdropContainer = styled.div`
	position: fixed;
	top: 0;
	left: 0%;
	width: 100%;
	z-index: 100;
	height: 100vh;
	background-color: rgba(0, 0, 0, 0.7);
	opacity: ${({ opened }) => (opened ? "1" : "0")};
	visibility: ${({ opened }) => (opened ? "visible" : "hidden")};
	transition: all 0.1s;
`;

//Modal main container for modal Component
export const ModalContainer = styled.div`
	position: fixed;
	top: 50%;
	left: 50%;
	transform: ${({ opened }) =>
		opened ? "translate(-50%,-50%)" : "tranlsate(-50%,-150%)"};

	max-width: 800px;
	width: 75%;
	min-height: 50vh;
	display: flex;

	z-index: 150;
	opacity: ${({ opened }) => (opened ? "1" : "0")};
	visibility: ${({ opened }) => (opened ? "visible" : "hidden")};
	box-shadow: 0 0.5rem 3.5em var(--shadow);
	border-radius: 1rem;
	transition: all 0.1s;
`;

//Modal inside container
export const ModalInsideContainer = styled.div`
	position: relative;
	width: 100%;
	border-top-right-radius: 2rem 2rem;
	border-bottom-right-radius: 2rem 2rem;
	display: flex;
	align-items: center;
	background-color: var(--color-white);
	justify-content: center;
	@media ${(props) => props.theme.mediaQueries.medium} {
		flex-direction: column;
		height: 60vh;
	}
	@media ${(props) => props.theme.mediaQueries.small} {
		width: 100%;
	}
`;
