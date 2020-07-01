import React from "react";

const TodoInput = ({onSubmit}) => {
    const onKeyPress = event => {
        if (event.key === 'Enter') {
            const todo = {
                title: event.target.value,
                state: 'active'
            }
            onSubmit(todo);
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