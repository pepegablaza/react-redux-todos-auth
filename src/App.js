import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import Layout from "./layout/Layout";
import Login from "./pages/Auth/Login";
import SignUp from "./pages/Auth/SignUp";
import Todos from "./pages/Todos/Todos";
import Logout from "./pages/Auth/Logout";
import VerifyEmail from "./pages/Auth/VerifyEmail/VerifyEmail";
import RecoverPassword from "./pages/Auth/RecoverPassword/RecoverPassword";
import Profile from "./pages/Auth/Profile/Profile";

const App = ({ loggedIn, emailVerified }) => {
	let routes;

	if (loggedIn && !emailVerified) {
		routes = (
			<Switch>
				<Route exact path="/verify-email" component={VerifyEmail} />
				<Route exact path="/logout" component={Logout} />
				<Redirect to="/verify-email" />
			</Switch>
		);
	} else if (loggedIn && emailVerified) {
		routes = (
			<>
				<Switch>
					<Route exact path="/" component={Todos} />
					<Route exact path="/profile" component={Profile} />
					<Route exact path="/logout" component={Logout} />
					<Redirect to="/" />
				</Switch>
			</>
		);
	} else {
		routes = (
			<Switch>
				<Route exact path="/login" component={Login} />
				<Route exact path="/signup" component={SignUp} />
				<Route exact path="/recover" component={RecoverPassword} />
				<Redirect to="/login" />
			</Switch>
		);
	}

	return <Layout>{routes}</Layout>;
};

const mapStateToProps = ({ firebase }) => ({
	loggedIn: firebase.auth.uid,
	emailVerified: firebase.auth.emailVerified,
});

export default connect(mapStateToProps)(App);
