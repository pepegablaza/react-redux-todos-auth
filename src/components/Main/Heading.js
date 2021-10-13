import React from "react";
import styled, { css } from "styled-components";

//Headings

export const baseStyle = css`
	color: ${({ color }) =>
		color === "white" ? "var(--color-white)" : "var(--color-textColor)"};
	font-weight: ${({ bold }) => (bold ? "700" : "300")};
	margin-top: 0;
	letter-spacing: 1px;
	margin-bottom: ${({ noMargin }) => (noMargin ? "0rem" : "3rem")};

	@media ${(props) => props.theme.mediaQueries.medium} {
		z-index: 3;
	}
`;

export const Heading0 = styled.p`
	font-size: 7rem;
	font-family: inherit;
	text-transform: capitalize;
	${baseStyle}
`;
export const Heading1 = styled.h1`
	font-size: 3rem;
	text-transform: uppercase;
	@media ${(props) => props.theme.mediaQueries.medium} {
		font-size: 2rem;
	}
	${baseStyle}
`;

export const Heading2 = styled.h2`
	font-size: 1.8rem;
	${baseStyle}
`;

export const Heading3 = styled.h3`
	font-size: 1.5rem;
	${baseStyle}
`;

export const Heading4 = styled.h4`
	font-size: 1.3rem;
	@media ${(props) => props.theme.mediaQueries.medium} {
		font-size: 1rem;
	}
	${baseStyle}
`;

const Heading = ({ children, color, noMargin, bold, size }) => {
	if (size === "xl")
		return (
			<Heading0 noMargin={noMargin} bold={bold} color={color}>
				{children}
			</Heading0>
		);
	if (size === "h1")
		return (
			<Heading1 noMargin={noMargin} bold={bold} color={color}>
				{children}
			</Heading1>
		);

	if (size === "h2")
		return (
			<Heading2 noMargin={noMargin} bold={bold} color={color}>
				{children}
			</Heading2>
		);

	if (size === "h3")
		return (
			<Heading3 noMargin={noMargin} bold={bold} color={color}>
				{children}
			</Heading3>
		);

	if (size === "h4")
		return (
			<Heading4 noMargin={noMargin} bold={bold} color={color}>
				{children}
			</Heading4>
		);
};

export default Heading;
