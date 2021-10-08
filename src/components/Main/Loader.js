import React from "react";
import { StyledLoader } from "../../layout/elements/Loaders";

const Loader = ({ isWhite }) => {
	return (
		<StyledLoader isWhite={isWhite}>
			<div />
			<div />
			<div />
			<div />
		</StyledLoader>
	);
};

export default Loader;
