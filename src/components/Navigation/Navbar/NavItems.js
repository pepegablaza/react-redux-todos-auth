import React from "react";
import { Ul, Nav } from "../../../layout/elements/Navbars";
import NavItem from "./NavItem";

const NavItems = ({ mobile, clicked, loggedIn }) => {
	let links;
	if (loggedIn.uid) {
		links = (
			<Ul mobile={mobile}>
				<NavItem mobile={mobile} clicked={clicked} link="/">
					Home
				</NavItem>
				<NavItem mobile={mobile} clicked={clicked} link="/todos">
					Todos
				</NavItem>
				<NavItem mobile={mobile} clicked={clicked} link="/profile">
					Profile
				</NavItem>
				<NavItem mobile={mobile} clicked={clicked} link="/logout">
					Logout
				</NavItem>
			</Ul>
		);
	} else {
		links = (
			<Ul mobile={mobile}>
				<NavItem mobile={mobile} clicked={clicked} link="/">
					Home
				</NavItem>
				<NavItem mobile={mobile} clicked={clicked} link="/login">
					Login
				</NavItem>
				<NavItem mobile={mobile} clicked={clicked} link="/signup">
					Signup
				</NavItem>
			</Ul>
		);
	}
	return <Nav mobile={mobile}>{links}</Nav>;
};

export default NavItems;
