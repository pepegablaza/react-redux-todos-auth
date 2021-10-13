import React from "react";
import { connect } from "react-redux";
import { MainContainer } from "../components/containers/Main";
import Navbar from "../components/Navigation/Navbar/Navbar";
import SideDrawer from "../components/Navigation/Navbar/SideDrawer";

const AppLayout = ({ children, loggedIn }) => (
	<>
		<Navbar loggedIn={loggedIn} />
		<SideDrawer loggedIn={loggedIn} />
		<MainContainer>{children}</MainContainer>
	</>
);

const mapStateToProps = ({ firebase }) => ({
	loggedIn: firebase.auth,
});

export default connect(mapStateToProps)(AppLayout);
