import React from 'react';
import './style.scss';

const TodoItem = ({ todo }) => {
	return (
		<li className={`todo-item${todo.completed ? " completed" : ""}`} >
			<h2 className="todo-item__item">{todo.title}</h2>
			<label><input type="checkbox" className="todo-item__complete-todo" /></label>
		</li>
	);
}

export default TodoItem