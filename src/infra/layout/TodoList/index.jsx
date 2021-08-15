import React from 'react';
import TodoItem from '../../../components/TodoItem';

const TodoList = ({ todoList, completeTodo, filterMode }) => {
    const filterBy = {
        completed: () => todoList.filter( todo => todo.completed === true ),
        active: () => todoList.filter( todo => todo.completed === false )
    }

    const filteredTodoList = !filterBy[filterMode] ? todoList : filterBy[filterMode]()

    return (
        <ul className="todo-list">
            {filteredTodoList.map( (todo, key) => <TodoItem todo={todo} key={key} id={key} completeTodo={completeTodo} /> )}
        </ul>
    );
}

export default TodoList