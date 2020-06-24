import React from "react";
import TodoItem from "./TodoItem";

const TodoList = props => {
    const onChangeItemState = (id, checked) => props.onChangeItemState(id, checked)
    const onDeleteItem = id => props.onDeleteItem(id)
    const onEditItem = id => props.onEditItem(id)

    const todosList = props.todos.map(todo => {
        return (
            <TodoItem
                todo={todo}
                onChangeItemState={onChangeItemState}
                onDeleteItem={onDeleteItem}
                onEditItem={onEditItem}
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