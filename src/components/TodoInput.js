import React, { useState } from "react";

const TodoInput = ({onSubmit}) => {
    const [titleInput, setTitleInput] = useState('')

    const onChange = event => {
        setTitleInput(event.target.value);
    }

    const onKeyPress = event => {
        if (event.key === 'Enter') {
            const todo = {
                title: event.target.value,
                state: 'active'
            }
            onSubmit(todo);
            setTitleInput('');
        }
    };

    return (
        <div>
            <input
                id="new-todo-title"
                className="new-todo"
                placeholder="할일을 추가해주세요"
                autoFocus
                value={titleInput}
                onChange={onChange}
                onKeyPress={onKeyPress}
            />
        </div>
    );
};

export default TodoInput;