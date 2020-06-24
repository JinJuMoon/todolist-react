import React, {useState} from "react";

const TodoItem = props => {
    const [title, setTitle] = useState(props.todo.title);

    const onClickCheckBox = event => props.onChangeItemState(props.todo.id, event.target.checked)
    const onClickDeleteButton = event => props.onDeleteItem(props.todo.id)
    const onDoubleClickTitle = event => props.onStartEditingMode(props.todo.id)
    const onKeyDown = event => {
        if (event.key === 'Escape') {
            props.onExitEditingMode(props.todo.id);
            setTitle(props.todo.title);
        }
        if (event.key === 'Enter') {
            props.onChangeItemTitle(props.todo.id, event.target.value);
            setTitle(props.todo.title);
        }
    }

    const onChange = event => {
        setTitle(event.target.value);
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
            <input
                className="edit"
                value={title}
                onChange={onChange}
                onKeyDown={onKeyDown}/>
        </li>
    );
}

export default TodoItem;