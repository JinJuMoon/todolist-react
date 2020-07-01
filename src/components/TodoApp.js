import React, { useState } from "react";
import TodoInput from "./TodoInput";
import TodoFilter from "./TodoFilter";
import { TODO_STATE_TYPE, VIEW_MODE_TYPE } from "../utils/Contants";

const TodoApp = () => {
    const [todos, setTodos] = useState([
        {id: 0, title: '새로운 타이틀', state: TODO_STATE_TYPE.active, editing: false},
        {id: 1, title: '완료된 타이틀', state: TODO_STATE_TYPE.completed, editing: true},
        {id: 2, title: '완료된 타이틀', state: TODO_STATE_TYPE.completed, editing: false}
    ]);

    const [nextId, setNextId] = useState(3);
    const [viewMode, setViewMode] = useState(VIEW_MODE_TYPE.all);

    const onSubmitTodos = todo => {
        const nextTodos = [
            ...todos,
            {id: nextId, title: todo.title, state: todo.state, editing: false}
        ];
        setTodos(nextTodos);
        setNextId(nextId + 1);
    }

    const onChangeItemState = (id, checked) => {
        const changeState = checked => checked ? TODO_STATE_TYPE.completed : TODO_STATE_TYPE.active;

        const nextTodos = todos.map(todo =>
            todo.id === id ? ({...todo, state: changeState(checked)}) : todo
        )
        setTodos(nextTodos);
    }

    const onDeleteItem = id => {
        const nextTodos = todos.filter(todo => todo.id !== id);
        setTodos(nextTodos);
    }

    const onStartEditingMode = id => {
        const nextTodos = todos.map(todo =>
            todo.id === id ? ({...todo, editing: true}) : todo
        )
        setTodos(nextTodos);
    }

    const onExitEditingMode = id => {
        const nextTodos = todos.map(todo =>
            todo.id === id ? ({...todo, editing: false}) : todo
        )
        setTodos(nextTodos);
    }

    const onChangeItemTitle = (id, title) => {
        const nextTodos = todos.map(todo =>
            todo.id === id ? ({...todo, title: title, editing: false}) : todo
        )
        setTodos(nextTodos);
    }

    const onChangeViewMode = viewMode => {
        setViewMode(viewMode);
    }

    return (
        <section className="todoapp">
            <h1>TODOS</h1>
            <TodoInput onSubmit={onSubmitTodos} />
            <TodoFilter
                todos={todos}
                viewMode={viewMode}
                onChangeItemState={onChangeItemState}
                onDeleteItem={onDeleteItem}
                onStartEditingMode={onStartEditingMode}
                onExitEditingMode={onExitEditingMode}
                onChangeItemTitle={onChangeItemTitle}
                onChangeViewMode={onChangeViewMode}
            />
        </section>
    );
};

export default TodoApp;