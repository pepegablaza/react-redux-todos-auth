import React from "react";
import ReactDOM from "react-dom";
import { ModalWrapper, ModalInsideWrapper } from "../../layout/elements/Modals";
import Backdrop from "./Backdrop/Backdrop";

const Modal = React.memo(
	({ opened, close, children }) => {
		return ReactDOM.createPortal(
			<>
				<Backdrop close={close} opened={opened} />
				<ModalWrapper opened={opened}>
					<ModalInsideWrapper>{children}</ModalInsideWrapper>
				</ModalWrapper>
			</>,
			document.getElementById("root-modal")
		);
	},
	(prevProps, nextProps) => {
		return prevProps.opened === nextProps.opened;
	}
);
export default Modal;
