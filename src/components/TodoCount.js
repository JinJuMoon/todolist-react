import React from "react";
import { VIEW_MODE_TYPE } from "../utils/Contants";

const TodoCount = props => {
    const onClickAllBtn = () => props.onChangeViewMode(VIEW_MODE_TYPE.all);
    const onClickActiveBtn = () => props.onChangeViewMode(VIEW_MODE_TYPE.active);
    const onClickCompletedBtn = () => props.onChangeViewMode(VIEW_MODE_TYPE.completed);

    return (
        <div className="count-container">
            <span className="todo-count">총 <strong>{props.count}</strong> 개</span>
            <ul className="filters">
                <li>
                    <a className="all selected" href="#/" onClick={onClickAllBtn}>전체보기</a>
                </li>
                <li>
                    <a className="active" href="#/active" onClick={onClickActiveBtn}>해야할 일</a>
                </li>
                <li>
                    <a className="completed" href="#/completed" onClick={onClickCompletedBtn}>완료한 일</a>
                </li>
            </ul>
        </div>
    );
};

export default TodoCount;