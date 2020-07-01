import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({todos, onChangeItemState, onDeleteItem, onStartEditingMode, onExitEditingMode, onChangeItemTitle}) => {
    const todosList = todos.map(todo => {
        return (
            <TodoItem
                key={todo.id}
                todo={todo}
                onChangeItemState={onChangeItemState}
                onDeleteItem={onDeleteItem}
                onStartEditingMode={onStartEditingMode}
                onExitEditingMode={onExitEditingMode}
                onChangeItemTitle={onChangeItemTitle}
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