import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider, useSelector } from "react-redux";
import { ReactReduxFirebaseProvider, isLoaded } from "react-redux-firebase";
import styled, { ThemeProvider } from "styled-components";
import App from "./App";
import { store, rrfProps } from "./store";
import Loader from "./components/Main/Loader";
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
