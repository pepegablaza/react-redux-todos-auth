import styled from "styled-components";

export const TodosMainContainer = styled.div`
	max-width: 1500px;
	width: 75%;
	display: flex;
	flex-direction: column;
	@media ${(props) => props.theme.mediaQueries.smallest} {
		width: 100%;
	}
`;

export const TodosNavigationContainer = styled.div`
	display: flex;
	padding: 1rem;
	justify-content: space-around;
`;

export const TodosContainer = styled.div`
	max-width: 1200px;
	width: 90%;
	margin: 0 auto;
	display: grid;
	grid-gap: 2rem;
	grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`;
