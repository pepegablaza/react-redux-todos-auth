import React from "react";
import { BackdropContainer } from "../../containers/Modal";

const Backdrop = ({ opened, close }) => {
	return <BackdropContainer onClick={close} opened={opened} />;
};
export default Backdrop;
