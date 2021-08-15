import React, { useEffect, useState } from "react";
import NewTodo from "./infra/inputs/NewTodo";
import Actions from "./infra/layout/Actions";
import Header from "./infra/layout/Header";
import TodoList from "./infra/layout/TodoList";

const App = () => {
	const [todoList, setTodoList] = useState([]),
		[filterMode, setFilterMode] = useState("all");

	useEffect(() => {
		setTodoList(JSON.parse(localStorage.getItem("todo-list")) || []);
	}, []);

	function updateList(newList) {
		setTodoList(newList);
		localStorage.setItem("todo-list", JSON.stringify(newList));
	}

	function createTodo({ target }) {
		updateList([
			{ title: target.nextSibling.value, completed: false },
			...todoList,
		]);
		target.nextSibling.value = "";
	}

	function completeTodo(todoId) {
		updateList(
			todoList.map((task, id) => {
				if (todoId === id)
					return { ...task, completed: !task.completed };

				return task;
			})
		);
	}

	function deleteTodo(todoId) {
		updateList(todoList.filter((todo, id) => id !== todoId));
	}

	function filterTodoList({ target }) {
		setFilterMode(target.dataset.filterMode);
	}

	function clearTodoList() {
		updateList(todoList.filter((todo) => todo.completed === false));
	}

	return (
		<>
			<Header />
			<main>
				<NewTodo createTodo={createTodo} />
				{todoList.length > 0 && (
					<div className="todo-area">
						<TodoList
							todoList={todoList}
							completeTodo={completeTodo}
							filterMode={filterMode}
							deleteTodo={deleteTodo}
						/>
						<Actions
							filterTodoList={filterTodoList}
							todosLeft={
								todoList.filter(
									(todo) => todo.completed === false
								).length
							}
							actualFilter={filterMode}
							clearTodoList={clearTodoList}
						/>
					</div>
				)}
			</main>
		</>
	);
};

export default App;
