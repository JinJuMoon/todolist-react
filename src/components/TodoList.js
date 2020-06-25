import React from "react";
import TodoItem from "./TodoItem";

const TodoList = props => {
    const todosList = props.todos.map(todo => {
        return (
            <TodoItem
                key={todo.id}
                todo={todo}
                onChangeItemState={props.onChangeItemState}
                onDeleteItem={props.onDeleteItem}
                onStartEditingMode={props.onStartEditingMode}
                onExitEditingMode={props.onExitEditingMode}
                onChangeItemTitle={props.onChangeItemTitle}
            />
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