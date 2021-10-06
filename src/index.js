import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { store, rrfProps } from "./store";
import { ReactReduxFirebaseProvider } from "react-redux-firebase";
import { useSelector } from "react-redux";
import { isLoaded } from "react-redux-firebase";
import App from "./App";

import Loader from "./components/Main/Loader/Loader";
import styled, { ThemeProvider } from "styled-components";
import theme from "./utils/theme";
import GlobalStyle from "./utils/global";

const Wrapper = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
`;

function AuthIsLoaded({ children }) {
	const auth = useSelector((state) => state.firebase.auth);
	if (!isLoaded(auth))
		return (
			<ThemeProvider theme={theme}>
				<>
					<Wrapper>
						<Loader />
					</Wrapper>
					<GlobalStyle />
				</>
			</ThemeProvider>
		);
	return children;
}

ReactDOM.render(
	<Provider store={store}>
		<ReactReduxFirebaseProvider {...rrfProps}>
			<Router>
				<AuthIsLoaded>
					<ThemeProvider theme={theme}>
						<>
							<App />
							<GlobalStyle />
						</>
					</ThemeProvider>
				</AuthIsLoaded>
			</Router>
		</ReactReduxFirebaseProvider>
	</Provider>,
	document.getElementById("root")
);
