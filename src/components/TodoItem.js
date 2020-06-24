import React from "react";

const TodoItem = props => {
    const onClickCheckBox = event => props.onChangeItemState(props.todo.id, event.target.checked)
    const onClickDeleteButton = event => props.onDeleteItem(props.todo.id)
    const onDoubleClickTitle = event => props.onEditItem(props.todo.id)
    const onKeyDown = event => {
        if (event.key === 'Escape') {
            props.onExitEditingMode(props.todo.id);
        }
    }

    return (
        <li id={props.todo.id} className={props.todo.editing ? 'editing' : props.todo.state}>
            <div className="view">
                <input className="toggle" type="checkbox" onClick={onClickCheckBox}/>
                <label className="label" onDoubleClick={onDoubleClickTitle}>
                    {props.todo.title}
                </label>
                <button className="destroy" onClick={onClickDeleteButton} />
            </div>
            <input className="edit" value={props.todo.title} onKeyDown={onKeyDown}/>
        </li>
    );
}

export default TodoItem;