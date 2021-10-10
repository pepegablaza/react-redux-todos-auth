import React from "react";

import { Container } from "../../../layout/elements/Main";
import {
	NavbarWrapper,
	NavbarInnerWrapper,
} from "../../../layout/elements/Navbars";
import NavItems from "./NavItems";
import Logo from "../Logo/Logo";

const Navbar = ({ loggedIn }) => {
	return (
		<NavbarWrapper>
			<Container>
				<NavbarInnerWrapper>
					<Logo />
					<NavItems loggedIn={loggedIn} />
				</NavbarInnerWrapper>
			</Container>
		</NavbarWrapper>
	);
};

export default Navbar;
