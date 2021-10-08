import React from "react";
import { Formik, Field } from "formik";
import { connect } from "react-redux";
import * as actions from "../../store/actions";
import { StyledForm } from "../../layout/elements/Forms";
import Button from "../../components/Main/Button";
import styled from "styled-components";
import Heading from "../../components/Main/Heading";
import Modal from "../../components/Modal/Modal";
import Input from "../../components/Main/Input";
import Message from "../../components/Main/Message";
import TodoSchema from "../../schemas/TodoSchema";

const ButtonsWrapper = styled.div`
	display: flex;
	width: 100%;
	position: relative;
	margin-bottom: 2rem;
	justify-content: space-around;
`;

const MessageWrapper = styled.div`
	position: absolute;
	bottom: 0;
	width: 100%;
	padding: 0 3rem;
`;

const InputTodo = ({
	editTodo,
	close,
	opened,
	addTodo,
	loading,
	error,
	editTodoAction,
}) => {
	const loadingText = editTodo ? "Editing..." : "Adding...";
	return (
		<>
			<Modal opened={opened} close={close}>
				<Heading noMargin size="h1" color="white">
					{editTodo ? "Edit your todo" : "Add your new todo"}
				</Heading>
				<Heading bold size="h4" color="white">
					{editTodo
						? "Edit your todo and press edit"
						: "Type your todo and press add"}
				</Heading>
				<Formik
					initialValues={{
						todo: editTodo ? editTodo.todo : "",
					}}
					validationSchema={TodoSchema}
					onSubmit={async (values, { setSubmitting, resetForm }) => {
						//send our todo
						const res = editTodo
							? await editTodoAction(editTodo.id, values)
							: await addTodo(values);
						setSubmitting(false);
						if (res) {
							close();
						}
						resetForm();
					}}
				>
					{({ isSubmitting, isValid, resetForm }) => (
						<StyledForm>
							<Field
								type="text"
								name="todo"
								placeholder="Write todo..."
								component={Input}
							/>
							<ButtonsWrapper>
								<Button
									contain
									type="submit"
									color="main"
									disabled={!isValid || isSubmitting}
									loading={loading ? loadingText : null}
								>
									{editTodo ? "Edit todo" : "Add todo"}
								</Button>
								<Button
									color="main"
									type="button"
									contain
									onClick={() => {
										close();
										resetForm();
									}}
								>
									Cancel
								</Button>
							</ButtonsWrapper>
							<MessageWrapper>
								<Message error show={error}>
									{error}
								</Message>
							</MessageWrapper>
						</StyledForm>
					)}
				</Formik>
			</Modal>
		</>
	);
};

const mapStateToProps = ({ todos }) => ({
	loading: todos.loading,
	error: todos.error,
});

const mapDispatchToProps = {
	addTodo: actions.addTodo,
	editTodoAction: actions.editTodo,
};

export default connect(mapStateToProps, mapDispatchToProps)(InputTodo);
