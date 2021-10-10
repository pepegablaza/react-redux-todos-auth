import styled from "styled-components";

export const SideDrawerWrapper = styled.header`
	position: fixed;
	background-color: var(--color-mainDark);
	padding: 0rem 2rem;
	z-index: 10;
	top: 0;
	left: 0;
	width: 100%;
	height: 6rem;
	display: none;
	@media ${(props) => props.theme.mediaQueries.smallest} {
		display: flex;
	}
`;

export const SideDrawerInnerWrapper = styled.div`
	display: flex;
	height: 100%;
	width: 100%;
	justify-content: space-between;
	align-items: center;
`;

export const Menu = styled.div`
	position: fixed;
	width: 100%;
	left: 0;
	top: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	margin-top: 6rem;
	z-index: 99;
	height: 100vh;
	background-color: var(--color-mainDark);
	visibility: ${(props) => (props.opened ? "visibile" : "hidden")};
	transform: translateY(${(props) => (props.opened ? "0%" : "-100%")});
	transition: all 0.5s cubic-bezier(0.445, 0.05, 0.55, 0.95);

	@media ${(props) => props.theme.mediaQueries.smallest} {
		display: flex;
	}
`;
