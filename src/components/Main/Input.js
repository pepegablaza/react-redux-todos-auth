import React from "react";
import styled from "styled-components";

const InputWrapper = styled.div`
	width: 100%;
	display: flex;
	position: relative;
	margin-bottom: 3.5rem;
	flex-direction: column;
	&:last-of-type {
		margin-bottom: 4.5rem;
	}
`;

const StyledInput = styled.input`
	padding: 1.2rem 2rem;
	width: 100%;
	padding: 1.5rem 3rem;
	color: var(--color-borderColor);
	font-weight: 700;
	font-size: 1.2rem;
	font-family: inherit;
	outline: none;
	border-radius: 0.7rem;
	border: 2px solid var(--color-borderColor);
	&::placeholder {
		color: var(--color-borderColor);
	}
	@media ${(props) => props.theme.mediaQueries.medium} {
		width: 100%;
	}
`;

const Error = styled.div`
	color: var(--color-errorRed);
	visibility: ${({ show }) => (show ? "visibile" : "hidden")};
	opacity: ${({ show }) => (show ? "1" : "0")};
	transform: translateY(${({ show }) => (show ? "20px" : "10px")});
	transition: all 0.1s;
	position: absolute;
	bottom: 0;
	left: 0;
	padding: 0rem 2rem;
	font-weight: 500;
	font-size: 1.2rem;
`;

const Input = ({ field, form: { touched, errors }, ...props }) => {
	return (
		<InputWrapper>
			<StyledInput {...field} {...props} />
			<Error show={errors[field.name] && touched[field.name]}>
				{errors[field.name]}
			</Error>
		</InputWrapper>
	);
};

export default Input;
