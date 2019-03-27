import React, { memo } from 'react'
const ToDoItem = function ToDoItem(props) {
    const {item} = props;
  return (
    <div>
      <li key={item.id} className='ui-state-default'> 
            <div className="checkbox">
                <label>
                    <input type='checkbox' checked={item.checked}></input>{item.text}
                </label>
            </div>
      </li>
    </div>
  )
}


export default ToDoItem
