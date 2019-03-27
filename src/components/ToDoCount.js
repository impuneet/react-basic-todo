import React from 'react'
const ToDoCount = (props) => {
    const {count} = props;
    return (
        <div className="todo-footer">
            <strong>
                <span className="count-todos">
                    {count}
                </span>
            </strong>
            {count === 1 ? ' item' : ' items'}
        </div>
    )
}


export default ToDoCount
