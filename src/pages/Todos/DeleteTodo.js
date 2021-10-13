import React from "react";
import { connect } from "react-redux";
import Button from "../../components/Main/Button";
import { HeadingContainer } from "../../components/containers/Heading";
import Modal from "../../components/Modal/Modal";
import Message from "../../components/Main/Message";
import * as actions from "../../store/actions";
import { FormButtonsContainer } from "../../components/containers/Buttons";
import FormBackgroundContainer from "../../components/Main/FormBackgroundContainer";

const DeleteTodo = ({ show, close, todo, deleteTodo, error, loading }) => {
	return (
		<Modal opened={show} close={close}>
			<FormBackgroundContainer>
				<HeadingContainer>
					<h1>Deleting a todo</h1>
					<p>{todo.todo}</p>
				</HeadingContainer>
			</FormBackgroundContainer>
			<FormButtonsContainer>
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
			</FormButtonsContainer>
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
