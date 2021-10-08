import React from "react";
import { InputWrapper, StyledInput, Error } from "../../layout/elements/Inputs";

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
