import React from "react";

const TodoCount = ({count, onClickAllBtn, onClickActiveBtn, onClickCompletedBtn}) => {
    return (
        <div className="count-container">
            <span className="todo-count">총 <strong>{count}</strong> 개</span>
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