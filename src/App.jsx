import React, { useState } from 'react';
import NewTodo from "./infra/inputs/NewTodo";
import Header from "./infra/layout/Header";
import TodoList from './infra/layout/TodoList';

const App = () => {
	const [todoList, setTodoList] = useState([]);

	function createTodo({ target }) {
		setTodoList([{title: target.nextSibling.value, completed: false},...todoList]);
	}

    return (
        <>
			<Header />
			<main>
				<NewTodo createTodo={createTodo} />
				<div className="todo-area">
					<TodoList todoList={todoList} />
				</div>
			</main>
		</>
    );
}

export default App