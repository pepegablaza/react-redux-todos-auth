import styled from "styled-components";

//Navbar containers
export const NavbarContainer = styled.header`
	position: fixed;
	background-color: var(--color-mainDark);
	padding: 0rem 2rem;
	top: 0;
	left: 0;
	width: 100%;
	height: 6rem;
	@media ${(props) => props.theme.mediaQueries.small} {
		display: none;
	}
`;

export const NavbarInnerContainer = styled.div`
	display: flex;
	height: 100%;
	justify-content: space-between;
`;

//SideDrawer containers

export const SideDrawerContainer = styled.header`
	position: fixed;
	background-color: var(--color-mainDark);
	padding: 0rem 2rem;
	z-index: 10;
	top: 0;
	left: 0;
	width: 100%;
	height: 6rem;
	display: none;
	@media ${(props) => props.theme.mediaQueries.small} {
		display: flex;
	}
`;

export const SideDrawerInnerContainer = styled.div`
	display: flex;
	height: 100%;
	width: 100%;
	justify-content: space-between;
	align-items: center;
`;
