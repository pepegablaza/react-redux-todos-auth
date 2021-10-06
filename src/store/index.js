import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import { createFirestoreInstance } from "redux-firestore";
import { applyMiddleware, createStore, compose } from "redux";
import { getFirebase } from "react-redux-firebase";
import { getFirestore } from "redux-firestore";
import thunk from "redux-thunk";
import reducer from "./reducers";
import { reduxFirebase } from "react-redux-firebase";

const fbConfig = {
	apiKey: process.env.REACT_APP_APIKEY,
	authDomain: "todo-39971.firebaseapp.com",
	projectId: "todo-39971",
	storageBucket: "todo-39971.appspot.com",
	messagingSenderId: "491348963336",
	appId: "1:491348963336:web:408428cb2f491513b7a1bd",
}; // object containing Firebase config
const rrfConfig = {
	userProfile: "users",
	useFirestoreForProfile: true,
	attachAuthIsReady: true,
};

const composeEnhancers =
	process.env.NODE_ENV === "development"
		? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
		: compose;

// Initialize firebase instance
firebase.initializeApp(fbConfig);
firebase.firestore();

const initialState = {};

export const store = createStore(
	reducer,
	initialState,
	composeEnhancers(
		applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })) // to add other middleware
	)
);

export const rrfProps = {
	firebase,
	config: rrfConfig,
	dispatch: store.dispatch,
	createFirestoreInstance, // <- needed if using firestore
	rfConfig: reduxFirebase,
};
