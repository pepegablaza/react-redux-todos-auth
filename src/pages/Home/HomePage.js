import React from "react";
import Heading from "../../components/Main/Heading";
import Waves from "../../components/Main/Waves";
import {
	HomePageContainer,
	HomePageIconsContainer,
	HomePageTextContainer,
} from "../../components/containers/Main";

export const HomePage = () => {
	return (
		<HomePageContainer>
			<HomePageTextContainer>
				<h1>Todo App</h1>

				<p>
					The app is for people who want to write anywhere and anytime their
					todos.
				</p>
			</HomePageTextContainer>
			<HomePageIconsContainer>
				<img src="logos/react.png" className="icon r" alt="" />
				<img src="logos/firebase.png" className="icon" alt="" />
			</HomePageIconsContainer>
			<Waves />
		</HomePageContainer>
	);
};
