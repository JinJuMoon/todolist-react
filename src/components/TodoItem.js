import React, { useState } from "react";

const TodoItem = props => {
    const [id, setId] = useState(props.todo.id);

    const onClickCheckBox = event => {
        props.onChangeItemState(id, event.target.checked);
    }

    return (
        <li id={props.todo.id} className={props.todo.state}>
            <div className="view">
                <input className="toggle" type="checkbox" onClick={onClickCheckBox}/>
                <label className="label">{props.todo.title}</label>
                <button className="destroy"></button>
            </div>
            <input className="edit" value={props.todo.title}/>
        </li>
    );
}

export default TodoItem;