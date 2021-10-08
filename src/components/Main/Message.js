import React from "react";
import { P } from "../../layout/elements/Messages";

const Message = ({ children, error, success, show }) => {
	return (
		<P error={error} success={success} show={show}>
			{children}
		</P>
	);
};

export default Message;
