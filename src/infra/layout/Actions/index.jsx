import React from 'react';
import './style.scss';

const Actions = ({ filterTodoList, todosLeft, actualFilter, clearTodoList }) => {
    return (
        <div className="actions">
            <span className="actions__left-counter">{todosLeft} items left</span>
            <div className="actions__filter">
                <button onClick={filterTodoList} data-filter-mode="all" className={`filter__mode${actualFilter === "all" ? " active" : ""}`}>All</button>
                <button onClick={filterTodoList} data-filter-mode="active" className={`filter__mode${actualFilter === "active" ? " active" : ""}`}>Active</button>
                <button onClick={filterTodoList} data-filter-mode="completed" className={`filter__mode${actualFilter === "completed" ? " active" : ""}`}>Completed</button>
            </div>
            <button className="actions__clear" onClick={clearTodoList} >Clear Completed</button>
        </div>
    );
}

export default Actions