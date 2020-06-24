import React from "react";
import TodoItem from "./TodoItem";

const TodoList = props => {
    const onChangeItemState = (id, checked) => props.onChangeItemState(id, checked)
    const onDeleteItem = id => props.onDeleteItem(id)
    const onStartEditingMode = id => props.onStartEditingMode(id)
    const onExitEditingMode = id => props.onExitEditingMode(id)
    const onChangeItemTitle = (id, title) => props.onChangeItemTitle(id, title)

    const todosList = props.todos.map(todo => {
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