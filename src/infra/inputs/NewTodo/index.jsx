import React from "react";
import "./style.scss";

const NewTodo = ({ createTodo }) => {
	return (
		<div className="new-todo">
			<button className="new-todo__complete" onClick={createTodo} ></button>
			<input
				type="text"
				className="new-todo__input"
				placeholder="Create a new todo..."
			/>
		</div>
	);
};

export default NewTodo;
