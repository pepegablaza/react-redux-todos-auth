import React, { useState } from "react";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { connect } from "react-redux";
import Heading from "../../components/Main/Heading";
import {
	TodosNavigationContainer,
	TodosMainContainer,
	TodosContainer,
} from "../../components/containers/Todos";
import InputTodo from "./InputTodo";
import Todo from "./Todo";
import Button from "../../components/Main/Button";
import Loader from "../../components/Main/Loader";

const Todos = ({ todos, userId }) => {
	const [isAdding, setIsAdding] = useState(false);

	let content;
	if (!todos) {
		content = (
			<>
				<Loader isWhite />
			</>
		);
	} else if (
		!todos[userId] ||
		!todos[userId].todos ||
		!todos[userId].todos.length
	) {
		content = (
			<>
				<Heading color="dark" size="h1">
					You have nothing to do...
				</Heading>
			</>
		);
	} else {
		content = (
			<>
				{todos[userId].todos
					.slice(0)
					.reverse()
					.map((todo) => (
						<Todo key={todo.id} todo={todo} />
					))}
			</>
		);
	}
	return (
		<TodosMainContainer>
			<TodosNavigationContainer>
				<Heading noMargin bold size="h1" color="dark">
					Your Todos
				</Heading>
				<Button color="main" contain onClick={() => setIsAdding(true)}>
					+ New Todo
				</Button>
				<InputTodo opened={isAdding} close={() => setIsAdding(false)} />
			</TodosNavigationContainer>

			<TodosContainer>{content}</TodosContainer>
		</TodosMainContainer>
	);
};

const mapStateToProps = ({ firebase, firestore }) => ({
	userId: firebase.auth.uid,
	todos: firestore.data.todos,
	requesting: firestore.status.requesting,
	requested: firestore.status.requested,
});

const mapDispatchToProps = {};

export default compose(
	connect(mapStateToProps, mapDispatchToProps),
	firestoreConnect((props) => [`todos/${props.userId}`])
)(Todos);
