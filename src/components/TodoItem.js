import React, {useState} from "react";

const TodoItem = props => {
    const [title, setTitle] = useState(props.todo.title);

    const onClickCheckBox = event => props.onChangeItemState(props.todo.id, event.target.checked)
    const onClickDeleteBtn = event => props.onDeleteItem(props.todo.id)
    const onDoubleClickTitle = event => props.onStartEditingMode(props.todo.id)
    const onKeyDown = event => {
        if (event.key === 'Escape') {
            props.onExitEditingMode(props.todo.id);
            setTitle(props.todo.title);
        }
        if (event.key === 'Enter') {
            props.onChangeItemTitle(props.todo.id, event.target.value);
        }
    }

    const onChange = event => {
        setTitle(event.target.value);
    }

    const defaultChecked = props.todo.state === 'completed';

    return (
        <li id={props.todo.id} className={props.todo.editing ? 'editing' : props.todo.state}>
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