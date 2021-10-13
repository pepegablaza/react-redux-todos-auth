import styled from "styled-components";

export const Container = styled.div`
	width: 100%;
	max-width: 140rem;
	margin: 0 auto;
	height: 100%;
`;

//AppLayout container
export const MainContainer = styled.main`
	width: 100%;
	min-height: calc(100vh - 6rem);
	margin-top: 6rem;
	display: flex;
	align-items: center;
	justify-content: center;
`;

//Homepage container
export const HomePageContainer = styled.div`
	background-color: var(--color-mainDark);
	position: absolute;
	top: 6rem;
	right: 0px;
	bottom: 0px;
	left: 0px;
	border-top: 1px solid white;
	@media ${(props) => props.theme.mediaQueries.small} {
		display: flex;
		justify-items: center;
		align-content: center;
		flex-direction: column;
	}
`;

//Homepage text container
export const HomePageTextContainer = styled.div`
	position: absolute;
	color: white;
	top: 20%;
	font-size: 3rem;
	left: 20%;
	min-height: 40vh;
	max-width: 600px;
	@media ${(props) => props.theme.mediaQueries.small} {
		font-size: 2.6rem;
		display: flex;
		justify-content: center;
		padding: 1rem;
		align-items: center;
		flex-direction: column;
		text-align: center;
		z-index: 3;
		width: 100%;
		left: 0;
	}
	@media ${(props) => props.theme.mediaQueries.smallest} {
		font-size: 2.3rem;
	}
`;
//Container for icons
export const HomePageIconsContainer = styled.div`
	color: white;
	height: 50px;
	position: absolute;
	bottom: 10%;
	left: 10%;
	z-index: 2;
	width: 20%;
	max-width: 150px;
	display: flex;
	justify-content: space-between;
`;
