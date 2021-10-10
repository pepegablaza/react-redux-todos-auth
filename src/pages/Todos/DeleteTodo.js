import React from "react";
import { connect } from "react-redux";
import Button from "../../components/Main/Button";
import Modal from "../../components/Modal/Modal";
import Heading from "../../components/Main/Heading";
import Message from "../../components/Main/Message";
import * as actions from "../../store/actions";
import { DeleteProfileButtonsContainer } from "../../layout/elements/Buttons";
import { DeleteTodoWrapper } from "../../layout/elements/Main";
import FormBannerContainer from "../../components/Main/FormBannerContainer";

const DeleteTodo = ({ show, close, todo, deleteTodo, error, loading }) => {
	return (
		<Modal opened={show} close={close}>
			<FormBannerContainer>
				<Heading noMargin size="h1" color="white">
					Deleting a todo
				</Heading>
				<DeleteTodoWrapper>{todo.todo}</DeleteTodoWrapper>
			</FormBannerContainer>
			<DeleteProfileButtonsContainer>
				<Button
					contain
					type="submit"
					color="red"
					onClick={() => deleteTodo(todo.id)}
					disabled={loading}
					loading={loading ? "Deleting..." : null}
				>
					Delete Todo
				</Button>
				<Button color="main" type="button" contain onClick={close}>
					Cancel
				</Button>

				<Message error show={error}>
					{error}
				</Message>
			</DeleteProfileButtonsContainer>
		</Modal>
	);
};

const mapStateToProps = ({ todos }) => ({
	error: todos.deleteTodo.error,
	loading: todos.deleteTodo.loading,
});

const mapDispatchToProps = {
	deleteTodo: actions.deleteTodo,
};

export default connect(mapStateToProps, mapDispatchToProps)(DeleteTodo);
