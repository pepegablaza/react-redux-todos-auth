import React from "react";
import { BackdropWrapper } from "../../../layout/elements/Backdrops";

const Backdrop = ({ opened, close }) => {
	return <BackdropWrapper onClick={close} opened={opened} />;
};
export default Backdrop;
