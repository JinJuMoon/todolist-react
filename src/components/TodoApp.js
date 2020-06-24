import React, { useState } from "react";
import TodoList from "./TodoList";
import TodoInput from "./TodoInput";
import TodoCount from "./TodoCount";

const TodoApp = () => {
    const [todos, setTodos] = useState([
        {id: 0, title: '새로운 타이틀', state: 'todo'},
        {id: 1, title: '완료된 타이틀', state: 'editing'},
        {id: 2, title: '완료된 타이틀', state: 'completed'}
    ]);

    const [nextId, setNextId] = useState(3);

    const onSubmitTodos = todo => {
        const nextTodos = [
            ...todos,
            {id: nextId, title: todo.title, state: todo.state}
        ];
        setTodos(nextTodos);
        setNextId(nextId + 1);
    }

    return (
        <section className="todoapp">
            <h1>TODOS</h1>
            <TodoInput onSubmit={onSubmitTodos} />
            <TodoList todos={todos} />
            <TodoCount />
        </section>
    );
};

export default TodoApp;