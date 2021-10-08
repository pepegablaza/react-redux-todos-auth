import styled from "styled-components";

//Button
export const StyledButton = styled.button`
	width: ${({ contain }) => (contain ? "auto" : "100%")};
	outline: none;
	padding: 1.2rem 5rem;
	border-radius: 2rem;
	font-size: 1.2rem;
	color: var(--color-white);
	font-weight: 700;
	box-shadow: 0rem 0.5rem 3.5rem var(--shadow);
	background-color: ${({ color }) => {
		if (color === "red") {
			return "var(--color-errorRed)";
		} else if (color === "main") {
			return "var(--color-main)";
		} else {
			return "var(--color-mainLighter)";
		}
	}};
	margin: 1.5rem 0 2rem 0;
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
	justify-content: space-around;
`;
