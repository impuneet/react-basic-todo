import React from 'react';
import InputBox from './InputBox';
import ToDoItem from './ToDoItem'
import ToDoCount from './ToDoCount'
const TodoList = (props) => {
    const {items} = props; 
    const count = items.length;
    return (
        <div className='todolist'>
        <h1> LIST</h1>
        <InputBox />
            <ul className="list-unstyled">
                {
                    items && items.map(item =>
                        <ToDoItem key={item.id} item={item} />
                    )}
                     <ToDoCount count={count} />
            </ul>
        </div>
    )
}

export default TodoList;