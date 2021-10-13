import React from "react";
import { Container } from "../../containers/Main";
import {
	NavbarContainer,
	NavbarInnerContainer,
} from "../../containers/Navigation";
import NavItems from "./NavItems";
import Logo from "../Logo/Logo";

const Navbar = ({ loggedIn }) => {
	return (
		<NavbarContainer>
			<Container>
				<NavbarInnerContainer>
					<Logo />
					<NavItems loggedIn={loggedIn} />
				</NavbarInnerContainer>
			</Container>
		</NavbarContainer>
	);
};

export default Navbar;
