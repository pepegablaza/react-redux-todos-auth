import React from "react";
import styled from "styled-components";
import Heading from "../../components/Main/Heading";
import Waves from "../../components/Main/Waves";

const HomePageWrapper = styled.div`
	background-color: var(--color-mainDark);
	position: absolute;
	top: 6rem;
	right: 0px;
	bottom: 0px;
	left: 0px;
	border-top: 1px solid white;
`;
const HomePageBanner = styled.div`
	position: absolute;
	color: white;
	top: 20%;
	font-size: 3rem;
	left: 20%;
	width: 30%;
`;

export const HomePage = () => {
	return (
		<HomePageWrapper>
			<HomePageBanner>
				<Heading color="white" size="xl">
					Todo App
				</Heading>

				<p>
					The app is for people who want to write anywhere and anytime their
					tasks.
				</p>
			</HomePageBanner>
			<Waves />
		</HomePageWrapper>
	);
};
