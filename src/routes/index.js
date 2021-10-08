import React, { Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import Login from "../pages/Auth/Login";
import SignUp from "../pages/Auth/SignUp";
import Logout from "../pages/Auth/Logout";
import VerifyEmail from "../pages/Auth/VerifyEmail";
import RecoverPassword from "../pages/Auth/RecoverPassword";
import Profile from "../pages/Auth/Profile";
import Loader from "../components/Main/Loader";
const Todos = React.lazy(() => import("../pages/Todos/Todos"));

const Routes = ({ loggedIn, emailVerified }) => {
	let routes;

	if (loggedIn && !emailVerified) {
		routes = (
			<Switch>
				<Route exact path="/verify-email" component={VerifyEmail} />
				<Route exact path="/profile" component={Profile} />
				<Route exact path="/logout" component={Logout} />
				<Redirect to="/verify-email" />
			</Switch>
		);
	} else if (loggedIn && emailVerified) {
		routes = (
			<Suspense fallback={<Loader />}>
				<Switch>
					<Route exact path="/" component={Todos} />
					<Route exact path="/profile" component={Profile} />
					<Route exact path="/logout" component={Logout} />
					<Redirect to="/" />
				</Switch>
			</Suspense>
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
	return routes;
};

const mapStateToProps = ({ firebase }) => ({
	loggedIn: firebase.auth.uid,
	emailVerified: firebase.auth.emailVerified,
});

export default connect(mapStateToProps)(Routes);
