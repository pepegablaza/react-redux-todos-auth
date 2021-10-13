import React from "react";
import styled from "styled-components";
import Waves from "./Waves";

//Form Background
export const FormBackground = styled.div`
	display: flex;
	position: relative;
	flex-direction: column;
	height: 100%;
	width: 50%;
	padding: 5rem;
	border-top-right-radius: 2rem 2rem;
	border-bottom-right-radius: 2rem 2rem;
	background-color: var(--color-mainDark);
	overflow: hidden;
	@media ${(props) => props.theme.mediaQueries.medium} {
		width: 100%;
	}
	@media ${(props) => props.theme.mediaQueries.small} {
		padding-bottom: 2rem;
		height: 50%;
	}
`;

const FormBackgroundContainer = ({ children }) => {
	return (
		<FormBackground>
			{children}
			<Waves />
		</FormBackground>
	);
};

export default FormBackgroundContainer;
