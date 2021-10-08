import React from "react";
import { Li, StyledNavLink } from "../../../layout/elements/Navbars";

const NavItem = ({ link, children, mobile, clicked }) => {
	return (
		<Li>
			<StyledNavLink
				onClick={clicked}
				exact
				activeClassName="active"
				mobile={mobile ? 1 : 0}
				to={link}
			>
				{children}
			</StyledNavLink>
		</Li>
	);
};

export default NavItem;
