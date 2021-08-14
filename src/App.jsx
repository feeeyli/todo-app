import React, { useState } from 'react';
import NewTodo from "./infra/inputs/NewTodo";
import Header from "./infra/layout/Header";
import TodoList from './infra/layout/TodoList';

const App = () => {
	const [todoList, setTodoList] = useState([]);

	function createTodo({ target }) {
		setTodoList([{title: target.nextSibling.value, completed: false},...todoList]);
	}
	
	function completeTodo(todoId) {
		setTodoList(todoList.map((task, id) => {
			if ( todoId === id ) return { ...task, completed: !task.completed }

			return task
		} ));
	}

    return (
        <>
			<Header />
			<main>
				<NewTodo createTodo={createTodo} />
				<div className="todo-area">
					<TodoList todoList={todoList} completeTodo={completeTodo} />
				</div>
			</main>
		</>
    );
}

export default App