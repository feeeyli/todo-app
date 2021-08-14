import React from 'react';
import './style.scss';

const TodoItem = ({ todo }) => {
	return (
		<li className={`todo-item${todo.completed ? " completed" : ""}`} >
			<label><input type="checkbox" className="todo-item__complete-todo" /></label>
			<h2 className="todo-item__title">{todo.title}</h2>
		</li>
	);
}

export default TodoItem