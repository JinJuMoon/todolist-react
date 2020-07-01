import TodoList from "./TodoList";
import React from "react";
import TodoCount from "./TodoCount";
import { VIEW_MODE_TYPE } from "../utils/Contants";

const TodoFilter = props => {
    const filterTodos = () => {
        return props.todos.filter(todo => todo.state === props.viewMode);
    }

    const filteredTodos = props.viewMode === VIEW_MODE_TYPE.all ? props.todos : filterTodos();

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