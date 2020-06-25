import TodoList from "./TodoList";
import React from "react";
import TodoCount from "./TodoCount";

const TodoFilter = props => {
    const filterTodos = () => {
        return props.todos.filter(todo => todo.state === props.viewMode);
    }

    const filteredTodos = props.viewMode === 'all' ? props.todos : filterTodos();

    return (
        <>
            <TodoList
                todos={filteredTodos}
                onChangeItemState={props.onChangeItemState}
                onDeleteItem={props.onDeleteItem}
                onStartEditingMode={props.onStartEditingMode}
                onExitEditingMode={props.onExitEditingMode}
                onChangeItemTitle={props.onChangeItemTitle}
            />
            <TodoCount count={filteredTodos.length} onChangeViewMode={props.onChangeViewMode}/>
        </>
        );
}

export default TodoFilter;