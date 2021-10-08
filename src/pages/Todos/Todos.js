import React, { useState } from "react";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { connect } from "react-redux";
import styled from "styled-components";
import Heading from "../../components/Main/Headings/Heading";
import { Container } from "../../layout/elements";
import InputTodo from "./InputTodo/InputTodo";
import Loader from "../../components/Main/Loader/Loader";
import Todo from "./Todo/Todo";
import Button from "../../components/Main/Forms/Button";

const Wrapper = styled.div`
	width: 100%;
	align-self: flex-start;
	background-color: var(--color-mainLight);
	height: 100%;
	min-height: calc(100vh - 6rem);
`;

const InnerWrapper = styled.div`
	display: flex;
	padding: 5rem 4rem;
	flex-direction: column;
	align-items: center;
`;

const Content = styled.div`
	width: 100%;
	align-items: center;
	max-width: 60rem;
	display: flex;
	flex-direction: column;
	margin-top: 2rem;
`;

const Todos = ({ todos, requested, userId }) => {
	const [isAdding, setIsAdding] = useState(false);
	let content;
	console.log(todos);

	if (!todos) {
		content = (
			<Content>
				<Loader isWhite />
			</Content>
		);
	} else if (!todos[userId] || !todos[userId].todos) {
		content = (
			<Content>
				<Heading color="white" size="h2">
					You have no todos
				</Heading>
			</Content>
		);
	} else if (todos[userId].todos.length === 0) {
		content = (
			<Content>
				<Heading color="white" size="h2">
					You have no todos
				</Heading>
			</Content>
		);
	} else {
		content = (
			<Content>
				{todos[userId].todos
					.slice(0)
					.reverse()
					.map((todo) => (
						<Todo key={todo.id} todo={todo} />
					))}
			</Content>
		);
	}

	return (
		<Wrapper>
			<Container>
				<InnerWrapper>
					<Heading noMargin size="h1" color="white">
						Your Todos
					</Heading>
					<Heading bold size="h4" color="white">
						All you have to do for now....
					</Heading>
					<Button color="main" contain onClick={() => setIsAdding(true)}>
						Add Todo
					</Button>
					<InputTodo opened={isAdding} close={() => setIsAdding(false)} />
					{content}
				</InnerWrapper>
			</Container>
		</Wrapper>
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
