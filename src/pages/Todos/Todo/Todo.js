import React, { useState } from "react";
import styled from "styled-components";
import InputTodo from "../InputTodo/InputTodo";
import DeleteTodo from "./DeleteTodo";

const Wrapper = styled.div`
	width: 100%;
	position: relative;
	padding: 4rem 3rem;
	background-color: var(--color-mainLighter);
	box-shadow: 0rem 0.5rem 3.5rem var(--shadow);
	margin-bottom: 3.5rem;
	border-radius: 0.5rem;
	font-size: 3rem;
	font-weight: 700;
	text-align: center;
	color: var(--color-white);
	text-transform: capitalize;
`;
const Controls = styled.div`
	position: absolute;
	left: 0;
	bottom: 0;
	padding: 1rem;
	width: 100%;
	display: flex;
	justify-content: center;
`;

const editStyles = {
	color: "var(--color-main)",
	margin: "0 .5rem",
	cursor: "pointer",
};
const deleteStyles = {
	color: "var(--color-errorRed)",
	margin: "0 .5rem",
	cursor: "pointer",
};

const Todo = ({ todo }) => {
	const [isDeleting, setIsDeleting] = useState(false);
	const [isEditing, setIsEditing] = useState(false);
	return (
		<Wrapper>
			{todo.todo}
			<Controls>
				<i
					className="fas fa-edit "
					style={editStyles}
					onClick={() => setIsEditing(true)}
				/>
				<i
					className="fas fa-trash-alt "
					style={deleteStyles}
					onClick={() => setIsDeleting(true)}
				/>
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
			</Controls>
		</Wrapper>
	);
};

export default Todo;
