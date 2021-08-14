import React from 'react';
import TodoItem from '../../../components/TodoItem';
import './style.scss';

const TodoList = ({ todoList }) => {
    return (
        <ul className="todo-list">
            {todoList.map( (todo, key) => <TodoItem todo={todo} key={key} /> )}
        </ul>
    );
}

export default TodoList