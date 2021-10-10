import styled from "styled-components";
import { Form } from "formik";
export const FormContainer = styled.div`
	width: 60%;
	max-width: 1100px;
	height: 560px;
	min-height: 65vh;
	margin: 0 auto;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: white;
	border-top-right-radius: 2rem 2rem;
	border-bottom-right-radius: 2rem 2rem;
`;

export const FormBanner = styled.div`
	display: flex;
	position: relative;
	flex-direction: column;
	height: 100%;
	width: 50%;
	padding: 5rem;
	border-top-right-radius: 2rem 2rem;
	border-bottom-right-radius: 2rem 2rem;
	background-color: var(--color-mainDark);
	overflow: hidden;
`;

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
`;
export const InputStyledForm = styled(Form)`
	background-color: var(--color-white);
	display: flex;
	position: relative;
	justify-content: center;
	width: 60%;
	height: 100%;
	border-top-right-radius: 2rem 2rem;
	border-bottom-right-radius: 2rem 2rem;
	flex-direction: column;
	padding: 3rem;
	border-radius: 2rem;
	z-index: 1;
`;
