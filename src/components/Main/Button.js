import React from "react";
import { StyledButton } from "../../layout/elements/Buttons";

const Button = ({ children, disabled, loading, contain, color, ...rest }) => {
	return (
		<StyledButton color={color} contain={contain} disabled={disabled} {...rest}>
			{loading ? loading : children}
		</StyledButton>
	);
};

export default Button;
