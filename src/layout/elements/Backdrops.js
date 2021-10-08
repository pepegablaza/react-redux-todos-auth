import styled from "styled-components";

export const BackdropWrapper = styled.div`
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
