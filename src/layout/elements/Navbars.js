import styled from "styled-components";
import { NavLink } from "react-router-dom";
//Navbar
export const NavbarWrapper = styled.header`
	position: fixed;
	background-color: var(--color-mainDark);
	padding: 0rem 2rem;
	top: 0;
	left: 0;
	width: 100%;
	height: 6rem;
	@media ${(props) => props.theme.mediaQueries.smallest} {
		display: none;
	}
`;

export const NavbarInnerWrapper = styled.div`
	display: flex;
	height: 100%;
	justify-content: space-between;
`;

//NavItems
export const Nav = styled.nav`
	display: flex;
	margin-top: ${(props) => (props.mobile ? "-6rem" : null)};
`;

export const Ul = styled.ul`
	display: flex;
	flex-direction: ${(props) => (props.mobile ? "column" : "row")};
	align-items: center;
	height: 100%;
`;

//NavItem

export const Li = styled.li`
	display: flex;
	height: 100%;
`;

export const StyledNavLink = styled(NavLink)`
	display: flex;
	text-transform: uppercase;
	align-items: center;
	border-bottom: ${(props) =>
		props.mobile ? "1px solid transparent" : "2px solid transparent;"};
	font-size: 1.2rem;
	padding: ${(props) => (props.mobile ? ".5rem 1rem" : "1rem")};
	margin: ${(props) => (props.mobile ? "2rem 0" : "0 1rem")};
	font-weight: 400;
	color: var(--color-white);
	transition: all 0.2s;
	&:hover {
		border-bottom: ${(props) =>
			props.mobile
				? "1px solid var(--color-white)"
				: "2px solid var(--color-white);"};
	}
	&.active {
		border-bottom: ${(props) =>
			props.mobile
				? "1px solid var(--color-white)"
				: "2px solid var(--color-white);"};
	}
`;
//Hamburger

export const StyledHamb = styled.div`
	width: 30px;
	height: 22.5px;
	padding: 1rem;
	position: relative;
	transform: rotate(0deg);
	transition: 0.5s ease-in-out;
	cursor: pointer;
	& span {
		display: block;
		position: absolute;
		height: 4.5px;
		width: 100%;
		background: var(--color-white);
		border-radius: 9px;
		opacity: 1;
		left: 0;
		transform: rotate(0deg);
		transition: 0.25s ease-in-out;
		&:nth-child(1) {
			top: ${(props) => (props.opened ? "9px" : "0px")};
			width: ${(props) => (props.opened ? "0%" : "100%")};
			left: ${(props) => (props.opened ? "50%" : null)};
		}
		&:nth-child(2) {
			transform: ${(props) => (props.opened ? "rotate(45deg)" : null)};
		}
		&:nth-child(3) {
			transform: ${(props) => (props.opened ? "rotate(-45deg)" : null)};
		}
		&:nth-child(2),
		&:nth-child(3) {
			top: 9px;
		}
		&:nth-child(4) {
			top: ${(props) => (props.opened ? "9px" : "18px")};
			width: ${(props) => (props.opened ? "0%" : "100%")};
			left: ${(props) => (props.opened ? "50%" : null)};
		}
	}
`;

//SideDrawer

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
	height: 100vh;
	background-color: var(--color-mainDark);
	visibility: ${(props) => (props.opened ? "visibile" : "hidden")};
	transform: translateY(${(props) => (props.opened ? "0%" : "-100%")});
	transition: all 0.1s cubic-bezier(0.445, 0.05, 0.55, 0.95);
	display: none;
	@media ${(props) => props.theme.mediaQueries.smallest} {
		display: flex;
	}
`;
