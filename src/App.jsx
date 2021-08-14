import React, { useState } from 'react';
import NewTodo from "./infra/inputs/NewTodo";
import Header from "./infra/layout/Header";
import TodoList from './infra/layout/TodoList';

const App = () => {
	const [todoList] = useState([
		{title: "First Todo", completed: false},
		{title: "Second Todo", completed: false},
	]);

    return (
        <>
		<Header />
		<main>
			<NewTodo />
			<div className="todo-area">
				<TodoList todoList={todoList} />
			</div>
		</main>
	</>
    );
}

export default App