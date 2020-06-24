import React from "react";
import TodoItem from "./TodoItem";

const TodoList = props => {
    const onChangeState = (id, checked) => {
        props.onChangeState(id, checked)
    };

    const todosList = props.todos.map(todo => {
        return (
            <TodoItem todo={todo} onChangeState={onChangeState}/>
        );
    });

    return (
        <div className="main">
            <input className="toggle-all" type="checkbox" />
            <ul id="todo-list" className="todo-list">
                {todosList}
            </ul>
        </div>
    );
};

export default TodoList;