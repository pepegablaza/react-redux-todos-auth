import React from "react";
import { FormBanner } from "../../layout/elements/Forms";
import Waves from "./Waves";

const FormBannerContainer = ({ children }) => {
	return (
		<FormBanner>
			{children}
			<Waves />
		</FormBanner>
	);
};

export default FormBannerContainer;
