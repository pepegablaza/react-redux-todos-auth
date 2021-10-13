import React, { Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import Login from "../pages/Auth/Login";
import SignUp from "../pages/Auth/SignUp";
import Logout from "../pages/Auth/Logout";
import VerifyEmail from "../pages/Auth/VerifyEmail";
import RecoverPassword from "../pages/Auth/RecoverPassword";
import Account from "../pages/Auth/Account";
import Loader from "../components/Main/Loader";
import { HomePage } from "../pages/Home/HomePage";
const Todos = React.lazy(() => import("../pages/Todos/Todos"));

const Routes = ({ loggedIn, emailVerified }) => {
	let routes;

	if (loggedIn && !emailVerified) {
		routes = (
			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route exact path="/verify-email" component={VerifyEmail} />
				<Route exact path="/account" component={Account} />
				<Route exact path="/logout" component={Logout} />
				<Redirect to="/verify-email" component={VerifyEmail} />
			</Switch>
		);
	} else if (loggedIn && emailVerified) {
		routes = (
			<Suspense fallback={<Loader />}>
				<Switch>
					<Route exact path="/" component={HomePage} />
					<Route exact path="/todos" component={Todos} />
					<Route exact path="/account" component={Account} />
					<Route exact path="/logout" component={Logout} />
					<Redirect to="/" component={HomePage} />
				</Switch>
			</Suspense>
		);
	} else {
		routes = (
			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route exact path="/login" component={Login} />
				<Route exact path="/signup" component={SignUp} />
				<Route exact path="/recover" component={RecoverPassword} />
				<Redirect to="/" component={HomePage} />
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
