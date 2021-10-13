import styled from "styled-components";

//Input Todo Buttons Container
export const InputTodoButtonsContainer = styled.div`
	display: flex;
	width: 100%;
	position: relative;
	margin-bottom: 2rem;
	justify-content: space-around;
`;

//Todo Button Container
export const TodoButtonContainer = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: space-between;
	align-items: end;
`;

//Container for "Form" buttons

export const FormButtonsContainer = styled.div`
	background-color: var(--color-white);
	display: flex;
	position: relative;
	justify-content: center;
	width: 50%;
	height: 100%;
	border-top-right-radius: 2rem 2rem;
	border-bottom-right-radius: 2rem 2rem;
	flex-direction: column;
	padding: 3rem;
	border-radius: 2rem;
	z-index: 1;
	@media ${(props) => props.theme.mediaQueries.medium} {
		width: 100%;
	}
`;
