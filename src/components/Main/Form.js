import styled from "styled-components";
import { Form } from "formik";

export const StyledForm = styled(Form)`
	background-color: var(--color-white);
	display: flex;
	position: relative;
	align-items: center;
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
