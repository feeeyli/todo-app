import React from 'react';
import './style.scss';

const TodoItem = ({ todo, id, completeTodo, deleteTodo }) => {
	function handlerChange() {
		completeTodo(id)
	}

	function handlerClick() {
		deleteTodo(id)
	}

	return (
		<li className={`todo-item${todo.completed ? " completed" : ""}`} >
			<label><input type="checkbox" className="todo-item__complete-todo" onChange={handlerChange} /></label>
			<h2 className="todo-item__title">{todo.title}</h2>
			<button onClick={handlerClick} className="delete"></button>
		</li>
	);
}

export default TodoItem