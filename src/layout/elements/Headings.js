import styled, { css } from "styled-components";

//Headings

export const baseStyle = css`
	color: ${({ color }) =>
		color === "white" ? "var(--color-white)" : "var(--color-textColor)"};
	font-weight: ${({ bold }) => (bold ? "700" : "300")};
	margin-top: 0;
	letter-spacing: 1px;
	margin-bottom: ${({ noMargin }) => (noMargin ? "0rem" : "3rem")};
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
	${baseStyle}
`;
