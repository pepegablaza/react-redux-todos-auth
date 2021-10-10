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
		props.mobile ? "2px solid transparent" : "2.5px solid transparent;"};
	font-size: 2rem;
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

export const LogoWrapper = styled.div`
	color: var(--color-white);
	height: 100%;
	display: flex;
	align-items: center;
	font-weight: 700;
	font-size: 2.5rem;
	padding: 1rem;
	text-decoration: none;
`;
