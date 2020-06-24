import React from "react";

const TodoInput = props => {
    const onKeyPress = event => {
        if (event.key === 'Enter') {
            const todo = {
                title: event.target.value,
                state: 'todo'
            }
            props.onSubmit(todo);
            event.target.value = '';
        }
    };

    return (
        <div>
            <input
                id="new-todo-title"
                className="new-todo"
                placeholder="할일을 추가해주세요"
                autoFocus
                onKeyPress={onKeyPress}
            />
        </div>
    );
};

export default TodoInput;