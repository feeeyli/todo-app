import React from "react";
import "./style.scss";

const NewTodo = () => {
	return (
		<div className="new-todo">
			<input
				type="checkbox"
				name="complete-todo"
				id="complete-todo"
				className="new-todo__complete"
			/>
			<label htmlFor="complete-todo"></label>
			<input
				type="text"
				className="new-todo__input"
				placeholder="Create a new todo..."
			/>
		</div>
	);
};

export default NewTodo;
