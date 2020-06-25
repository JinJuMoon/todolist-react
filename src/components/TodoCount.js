import React from "react";

const TodoCount = props => {
    const onClickAllBtn = () => props.onChangeViewMode('all');
    const onClickActiveBtn = () => props.onChangeViewMode('todo');
    const onClickCompletedBtn = () => props.onChangeViewMode('completed');

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