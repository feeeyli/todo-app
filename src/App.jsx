import React, { useState } from 'react';
import NewTodo from "./infra/inputs/NewTodo";
import Actions from './infra/layout/Actions';
import Header from "./infra/layout/Header";
import TodoList from './infra/layout/TodoList';

const App = () => {
	const [todoList, setTodoList] = useState([]),
		[filterMode, setFilterMode] = useState("all");

	function createTodo({ target }) {
		setTodoList([{title: target.nextSibling.value, completed: false},...todoList]);
		target.nextSibling.value = ""
	}
	
	function completeTodo(todoId) {
		setTodoList(todoList.map((task, id) => {
			if ( todoId === id ) return { ...task, completed: !task.completed }

			return task
		} ));
	}

	function filterTodoList({target}) {
		setFilterMode(target.dataset.filterMode)
	}

	function clearTodoList() {
		setTodoList(todoList.filter( todo => todo.completed === false ))
	}

    return (
        <>
			<Header />
			<main>
				<NewTodo createTodo={createTodo} />
				{todoList.length > 0 && (
					<div className="todo-area">
						<TodoList todoList={todoList} completeTodo={completeTodo} filterMode={filterMode} />
						<Actions filterTodoList={filterTodoList} todosLeft={todoList.filter( todo => todo.completed === false ).length} actualFilter={filterMode} clearTodoList={clearTodoList} />
					</div>
				) }
			</main>
		</>
    );
}

export default App