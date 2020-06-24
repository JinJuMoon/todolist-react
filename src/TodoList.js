import React from "react";

const TodoList = props => {
    const todosList = props.todos.map(todo => {
        return (
            <li className={todo.state}>
                <div className="view">
                    <input className="toggle" type="checkbox"/>
                    <label className="label">{todo.title}</label>
                    <button className="destroy"></button>
                </div>
                <input className="edit" value={todo.title}/>
            </li>
        );
    });

    return (
        <div className="main">
            <input className="toggle-all" type="checkbox"/>
            <ul id="todo-list" className="todo-list">
                {todosList}
            </ul>
        </div>
    );
};

export default TodoList;