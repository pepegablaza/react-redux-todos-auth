import styled from "styled-components";

//Button
export const StyledButton = styled.button`
	width: ${({ contain }) => (contain ? "auto" : "100%")};
	outline: none;
	padding: 1.5rem 3rem;
	border-radius: 0.7rem;
	font-size: 1.2rem;
	color: var(--color-white);
	font-weight: 700;
	box-shadow: 0rem 0.5rem 3.5rem var(--shadow);
	background-color: var(--color-mainDark);
	margin: 1rem 0;
	border: none;
	transition: all 0.2s;
	&:hover {
		transform: translateY(-3px);
	}
	&:active {
		transform: translateY(2px);
	}
	&:disabled {
		cursor: not-allowed;
		background-color: #333;
	}
`;

export const ProfileButtonsWrapper = styled.div`
	display: flex;
	width: 100%;
	position: relative;
	margin-bottom: 2rem;
	background-color: white;
	border-radius: 1rem;
	justify-content: space-around;
`;

export const DeleteButtonsWrapper = styled.div`
	display: flex;
	width: 100%;
	position: relative;
	margin-bottom: 2rem;
	justify-content: space-around;
`;

export const InputTodoButtonsWrapper = styled.div`
	display: flex;
	width: 100%;
	position: relative;
	margin-bottom: 2rem;
	justify-content: space-around;
`;
export const TodoButtonControls = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: space-between;
	align-items: end;
`;

export const DeleteProfileButtonsContainer = styled.div`
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
`;
