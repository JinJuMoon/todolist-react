import React from "react";

const TodoItem = props => {
    return (
        <li className={props.todo.state}>
            <div className="view">
                <input className="toggle" type="checkbox"/>
                <label className="label">{props.todo.title}</label>
                <button className="destroy"></button>
            </div>
            <input className="edit" value={props.todo.title}/>
        </li>
    );
}

export default TodoItem;