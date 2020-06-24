import React, { useState } from "react";
import TodoList from "./TodoList";
import TodoInput from "./TodoInput";
import TodoCount from "./TodoCount";

const TodoApp = () => {
    const [todos, setTodos] = useState([
        {title: '새로운 타이틀', state: 'todo'},
        {title: '완료된 타이틀', state: 'editing'},
        {title: '완료된 타이틀', state: 'completed'}
    ]);

    const onSubmitTodos = todo => {
        const nextTodos = [
            ...todos,
            {title: todo.title, state: todo.state}
        ];
        setTodos(nextTodos);
    }

    return (
        <section className="todoapp">
            <h1>TODOS</h1>
            <TodoInput onSubmit={onSubmitTodos}/>
            <TodoList todos={todos}/>
            <TodoCount />
        </section>
    );
};

export default TodoApp;