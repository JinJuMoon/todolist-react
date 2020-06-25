import TodoList from "./TodoList";
import React from "react";

const TodoFilter = props => {
    const onChangeItemState = (id, checked) => props.onChangeItemState(id, checked)
    const onDeleteItem = id => props.onDeleteItem(id)
    const onStartEditingMode = id => props.onStartEditingMode(id)
    const onExitEditingMode = id => props.onExitEditingMode(id)
    const onChangeItemTitle = (id, title) => props.onChangeItemTitle(id, title)

    const filterTodos = () => {
        return props.todos.filter(todo => todo.state === props.viewMode);
    }

    const filteredTodos = props.viewMode === 'all' ? props.todos : filterTodos();

    return (
        <TodoList
            todos={filteredTodos}
            onChangeItemState={onChangeItemState}
            onDeleteItem={onDeleteItem}
            onStartEditingMode={onStartEditingMode}
            onExitEditingMode={onExitEditingMode}
            onChangeItemTitle={onChangeItemTitle}
        />
    )
}

export default TodoFilter;