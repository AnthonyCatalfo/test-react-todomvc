import React from 'react'
export const TodoForm=(props)=>(
    <form onSubmit={(props.currentTodo) ? props.handleSubmit : props.handleEmpty}>
    <input type="text" autoFocus="true" onChange={props.handleInputChange} value={props.currentTodo} />
  </form>  
)