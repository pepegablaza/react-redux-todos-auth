import React from "react";
import { connect } from "react-redux";

import { MainWrapper } from "./elements";
import Navbar from "../components/Navigation/Navbar/Navbar";
import SideDrawer from "../components/Navigation/Navbar/SideDrawer";

const Layout = ({ children, loggedIn }) => (
	<>
		<Navbar loggedIn={loggedIn} />
		<SideDrawer loggedIn={loggedIn} />
		<MainWrapper>{children}</MainWrapper>
	</>
);

const mapStateToProps = ({ firebase }) => ({
	loggedIn: firebase.auth,
});

export default connect(mapStateToProps)(Layout);
