import React from 'react'
export const TodoItem = (props) => {
    
    return (
    <li>
        <span className='delete-item'><a href="#" onClick={() => props.handleRemove(props.id)}>X</a></span>
            <input type="checkbox" onChange={() => props.handleToggle(props.id)} checked={props.isComplete}/>{props.name}
    </li>
    )
}