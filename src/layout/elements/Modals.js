import styled from "styled-components";

//Modal

export const ModalWrapper = styled.div`
	position: fixed;
	top: 50%;
	left: 50%;
	transform: ${({ opened }) =>
		opened ? "translate(-50%,-50%)" : "tranlsate(-50%,-150%)"};
	width: 100%;
	max-width: 70rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	z-index: 150;
	justify-content: center;
	opacity: ${({ opened }) => (opened ? "1" : "0")};
	visibility: ${({ opened }) => (opened ? "visible" : "hidden")};
	width: 100%;
	max-width: 50rem;
	box-shadow: 0 0.5rem 3.5em var(--shadow);
	border-radius: 1rem;
	background-color: var(--color-mainLighter);
	transition: all 0.1s;
`;

export const ModalInsideWrapper = styled.div`
	position: relative;
	width: 100%;
	padding: 4rem 3rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;
