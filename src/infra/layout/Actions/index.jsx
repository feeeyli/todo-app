import React from 'react';

const Actions = ({ filterTodoList, todosLeft }) => {
    return (
        <div className="actions">
            <span className="actions__left-counter">{todosLeft} items left</span>
            <div className="actions__filter">
                <button onClick={filterTodoList} data-filter-mode="all" className="filter__mode">All</button>
                <button onClick={filterTodoList} data-filter-mode="active" className="filter__mode">Active</button>
                <button onClick={filterTodoList} data-filter-mode="completed" className="filter__mode">Completed</button>
            </div>
            <button className="actions__clear">Clear Completed</button>
        </div>
    );
}

export default Actions