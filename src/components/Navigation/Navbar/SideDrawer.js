import React, { useState } from "react";
import {
	SideDrawerContainer,
	SideDrawerInnerContainer,
} from "../../containers/Navigation";
import Logo from "../Logo/Logo";
import NavItems from "./NavItems";
import Hamburger from "./Hamburger";
import styled from "styled-components";

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

	@media ${(props) => props.theme.mediaQueries.small} {
		display: flex;
	}
`;

const SideDrawer = ({ loggedIn }) => {
	const [isOpened, setIsOpened] = useState(false);
	return (
		<>
			<SideDrawerContainer>
				<SideDrawerInnerContainer>
					<Logo />
					<Hamburger opened={isOpened} clicked={() => setIsOpened(!isOpened)} />
				</SideDrawerInnerContainer>
			</SideDrawerContainer>
			<Menu opened={isOpened}>
				<NavItems
					loggedIn={loggedIn}
					mobile
					clicked={() => setIsOpened(false)}
				/>
			</Menu>
		</>
	);
};

export default SideDrawer;
