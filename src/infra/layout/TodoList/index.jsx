import React from 'react';
import TodoItem from '../../../components/TodoItem';

const TodoList = ({ todoList, completeTodo }) => {
    return (
        <ul className="todo-list">
            {todoList.map( (todo, key) => <TodoItem todo={todo} key={key} id={key} completeTodo={completeTodo} /> )}
        </ul>
    );
}

export default TodoList