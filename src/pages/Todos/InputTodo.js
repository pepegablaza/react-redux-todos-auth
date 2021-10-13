import React from "react";
import { Formik, Field } from "formik";
import { connect } from "react-redux";
import * as actions from "../../store/actions";

import { StyledForm } from "../../components/Main/Form";
import Button from "../../components/Main/Button";
import Modal from "../../components/Modal/Modal";
import Input from "../../components/Main/Input";
import Message from "../../components/Main/Message";
import TodoSchema from "../../schemas/TodoSchema";
import FormBackgroundContainer from "../../components/Main/FormBackgroundContainer";
import { InputTodoButtonsContainer } from "../../components/containers/Buttons";
import { MessagesContainer } from "../../components/containers/Message";
import { HeadingContainer } from "../../components/containers/Heading";

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
				<FormBackgroundContainer>
					<HeadingContainer>
						<h1>{editTodo ? "Edit your todo" : "Add your new todo"}</h1>
						<p>{editTodo ? "Edit your todo" : "Type your todo"}</p>
					</HeadingContainer>
				</FormBackgroundContainer>
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
							<InputTodoButtonsContainer>
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
							</InputTodoButtonsContainer>
							<MessagesContainer>
								<Message error show={error}>
									{error}
								</Message>
							</MessagesContainer>
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
