import React, { useState } from "react";
import InputTodo from "./InputTodo";
import DeleteTodo from "./DeleteTodo";
import { TodoContainer } from "../../components/containers/Todo";
import { TodoButtonContainer } from "../../components/containers/Buttons";

const Todo = ({ todo }) => {
	const [isDeleting, setIsDeleting] = useState(false);
	const [isEditing, setIsEditing] = useState(false);
	return (
		<TodoContainer>
			<p>{todo.todo}</p>
			<TodoButtonContainer>
				<i className="fas fa-trash-alt" onClick={() => setIsDeleting(true)} />
				<i className="fas fa-edit" onClick={() => setIsEditing(true)} />
				<DeleteTodo
					todo={todo}
					show={isDeleting}
					close={() => setIsDeleting(false)}
				/>
				<InputTodo
					editTodo={todo}
					opened={isEditing}
					close={() => setIsEditing(false)}
				/>
			</TodoButtonContainer>
		</TodoContainer>
	);
};

export default Todo;
