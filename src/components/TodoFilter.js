import TodoList from "./TodoList";
import React from "react";
import TodoCount from "./TodoCount";
import { VIEW_MODE_TYPE } from "../utils/Contants";

const TodoFilter = ({todos, viewMode,
                        onChangeItemState, onDeleteItem, onStartEditingMode, onExitEditingMode, onChangeItemTitle,
                        onClickAllBtn, onClickActiveBtn, onClickCompletedBtn}) => {
    const filterTodos = () => {
        return todos.filter(todo => todo.state === viewMode);
    }

    const filteredTodos = viewMode === VIEW_MODE_TYPE.all ? todos : filterTodos();

    return (
        <>
            <TodoList
                todos={filteredTodos}
                onChangeItemState={onChangeItemState}
                onDeleteItem={onDeleteItem}
                onStartEditingMode={onStartEditingMode}
                onExitEditingMode={onExitEditingMode}
                onChangeItemTitle={onChangeItemTitle}
            />
            <TodoCount
                count={filteredTodos.length}
                onClickAllBtn={onClickAllBtn}
                onClickActiveBtn={onClickActiveBtn}
                onClickCompletedBtn={onClickCompletedBtn}/>
        </>
        );
}

export default TodoFilter;