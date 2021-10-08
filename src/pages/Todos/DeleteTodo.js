import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import Button from "../../components/Main/Button";
import Modal from "../../components/Modal/Modal";
import Heading from "../../components/Main/Heading";
import Message from "../../components/Main/Message";
import * as actions from "../../store/actions";

const ButtonsWrapper = styled.div`
	display: flex;
	width: 100%;
	position: relative;
	margin-bottom: 2rem;
	justify-content: space-around;
`;

const TodoWrapper = styled.div`
	margin: 1rem 0rem;
	font-size: 5rem;
	color: var(--color-white);
	text-align: center;
	text-transform: capitalize;
`;

const MessageWrapper = styled.div`
	position: absolute;
	bottom: 2rem;
	width: 100%;
	padding: 0 3rem;
`;

const DeleteTodo = ({ show, close, todo, deleteTodo, error, loading }) => {
	return (
		<Modal opened={show} close={close}>
			<Heading noMargin size="h1" color="white">
				Deleting a todo
			</Heading>
			<TodoWrapper>{todo.todo}</TodoWrapper>
			<ButtonsWrapper>
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
			</ButtonsWrapper>
			<MessageWrapper>
				<Message error show={error}>
					{error}
				</Message>
			</MessageWrapper>
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
