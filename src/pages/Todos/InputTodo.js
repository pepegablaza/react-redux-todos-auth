import React from "react";
import { Formik, Field } from "formik";
import { connect } from "react-redux";
import * as actions from "../../store/actions";
import { InputStyledForm } from "../../layout/elements/Forms";
import Button from "../../components/Main/Button";
import Heading from "../../components/Main/Heading";
import Modal from "../../components/Modal/Modal";
import Input from "../../components/Main/Input";
import Message from "../../components/Main/Message";
import TodoSchema from "../../schemas/TodoSchema";
import { InputTodoButtonsWrapper } from "../../layout/elements/Buttons";
import { InputTodoMessageWrapper } from "../../layout/elements/Messages";
import FormBannerContainer from "../../components/Main/FormBannerContainer";

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
				<FormBannerContainer>
					<Heading noMargin size="h1" color="white">
						{editTodo ? "Edit your todo" : "Add your new todo"}
					</Heading>
					<Heading bold size="h4" color="white">
						{editTodo ? "Edit your todo" : "Type your todo"}
					</Heading>
				</FormBannerContainer>
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
						<InputStyledForm>
							<Field
								type="text"
								name="todo"
								placeholder="Write todo..."
								component={Input}
							/>
							<InputTodoButtonsWrapper>
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
							</InputTodoButtonsWrapper>
							<InputTodoMessageWrapper>
								<Message error show={error}>
									{error}
								</Message>
							</InputTodoMessageWrapper>
						</InputStyledForm>
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
