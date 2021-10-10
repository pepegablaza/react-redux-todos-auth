import React, { useState } from "react";
import InputTodo from "./InputTodo";
import DeleteTodo from "./DeleteTodo";
import { TodoContainer } from "../../layout/elements/Main";
import { TodoButtonControls } from "../../layout/elements/Buttons";

const Todo = ({ todo }) => {
	const [isDeleting, setIsDeleting] = useState(false);
	const [isEditing, setIsEditing] = useState(false);
	return (
		<TodoContainer>
			<p>{todo.todo}</p>
			<TodoButtonControls>
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
			</TodoButtonControls>
		</TodoContainer>
	);
};

export default Todo;
