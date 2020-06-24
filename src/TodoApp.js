import React from "react";
import TodoList from "./TodoList";
import TodoInput from "./TodoInput";
import TodoCount from "./TodoCount";

const TodoApp = () => {
    return (
        <section className="todoapp">
            <h1>TODOS</h1>
            <TodoInput />
            <TodoList />
            <TodoCount />
        </section>
    );
};

export default TodoApp;