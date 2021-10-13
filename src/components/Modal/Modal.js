import React from "react";
import ReactDOM from "react-dom";
import { ModalContainer, ModalInsideContainer } from "../containers/Modal";
import Backdrop from "./Backdrop/Backdrop";

const Modal = React.memo(
	({ opened, close, children }) => {
		return ReactDOM.createPortal(
			<>
				<Backdrop close={close} opened={opened} />
				<ModalContainer opened={opened}>
					<ModalInsideContainer>{children}</ModalInsideContainer>
				</ModalContainer>
			</>,
			document.getElementById("root-modal")
		);
	},
	(prevProps, nextProps) => {
		return prevProps.opened === nextProps.opened;
	}
);
export default Modal;
