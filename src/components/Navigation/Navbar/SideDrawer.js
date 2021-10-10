import React, { useState } from "react";
import {
	SideDrawerWrapper,
	SideDrawerInnerWrapper,
	Menu,
} from "../../../layout/elements/SideDrawer";
import Logo from "../Logo/Logo";
import NavItems from "./NavItems";
import Hamburger from "./Hamburger";

const SideDrawer = ({ loggedIn }) => {
	const [isOpened, setIsOpened] = useState(false);
	return (
		<>
			<SideDrawerWrapper>
				<SideDrawerInnerWrapper>
					<Logo />
					<Hamburger opened={isOpened} clicked={() => setIsOpened(!isOpened)} />
				</SideDrawerInnerWrapper>
			</SideDrawerWrapper>
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
