import React, { useState } from "react";
import { KEY_TYPE, TODO_STATE_TYPE } from "../utils/Contants";

const TodoItem = ({todo, onChangeItemState, onDeleteItem, onStartEditingMode, onExitEditingMode, onChangeItemTitle}) => {
    const [title, setTitle] = useState(todo.title);

    const onClickCheckBox = event => onChangeItemState(todo.id, event.target.checked)
    const onClickDeleteBtn = event => onDeleteItem(todo.id)
    const onDoubleClickTitle = event => onStartEditingMode(todo.id)
    const onKeyDown = event => {
        if (event.key === KEY_TYPE.esc) {
            onExitEditingMode(todo.id);
            setTitle(todo.title);
        }
        if (event.key === KEY_TYPE.enter) {
            onChangeItemTitle(todo.id, event.target.value);
        }
    }

    const onChange = event => {
        setTitle(event.target.value);
    }

    const defaultChecked = todo.state === TODO_STATE_TYPE.completed;

    return (
        <li id={todo.id} className={todo.editing ? "editing" : todo.state}>
            <div className="view">
                <input className="toggle" defaultChecked={defaultChecked} type="checkbox" onClick={onClickCheckBox}/>
                <label className="label" onDoubleClick={onDoubleClickTitle}>
                    {title}
                </label>
                <button className="destroy" onClick={onClickDeleteBtn} />
            </div>
            <input
                className="edit"
                value={title}
                onChange={onChange}
                onKeyDown={onKeyDown}/>
        </li>
    );
}

export default TodoItem;