import React from "react";
import { Link } from "react-router-dom";
import { LogoWrapper } from "../../../layout/elements/Navbars";

const Logo = () => {
	return (
		<Link to="/">
			<LogoWrapper>Todo App</LogoWrapper>
		</Link>
	);
};

export default Logo;
