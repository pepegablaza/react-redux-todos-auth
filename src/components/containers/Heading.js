import styled from "styled-components";

export const HeadingContainer = styled.div`
	position: absolute;
	left: 0;
	top: 0;
	bottom: 0;
	right: 0;
	padding: 1rem;
	height: 100%;
	width: 100%;
	text-align: center;
	color: white;
	font-size: 2rem;
	font-weight: bold;
	z-index: 3;
	word-break: break-word;
	overflow: hidden;
	text-transform: capitalize;
	@media ${(props) => props.theme.mediaQueries.large} {
		text-align: left;
	}
	@media ${(props) => props.theme.mediaQueries.small} {
		font-size: 1.4rem;
	}
`;
