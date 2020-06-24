import React, { useState } from "react";
import TodoList from "./TodoList";
import TodoInput from "./TodoInput";
import TodoCount from "./TodoCount";

const TodoApp = () => {
    const [todos, setTodos] = useState([
        {id: 0, title: '새로운 타이틀', state: 'todo', editing: false},
        {id: 1, title: '완료된 타이틀', state: 'completed', editing: true},
        {id: 2, title: '완료된 타이틀', state: 'completed', editing: false}
    ]);

    const [nextId, setNextId] = useState(3);

    const onSubmitTodos = todo => {
        const nextTodos = [
            ...todos,
            {id: nextId, title: todo.title, state: todo.state, editing: false}
        ];
        setTodos(nextTodos);
        setNextId(nextId + 1);
    }

    const onChangeItemState = (id, checked) => {
        const changeState = checked => checked ? 'completed' : 'todo';

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

    return (
        <section className="todoapp">
            <h1>TODOS</h1>
            <TodoInput onSubmit={onSubmitTodos} />
            <TodoList
                todos={todos}
                onChangeItemState={onChangeItemState}
                onDeleteItem={onDeleteItem}
                onStartEditingMode={onStartEditingMode}
                onExitEditingMode={onExitEditingMode}
            />
            <TodoCount />
        </section>
    );
};

export default TodoApp;