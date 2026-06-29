import react, { useState } from 'react'
export default function ToDoInput(props) {
    const { handleAddTodos ,todoValue,setTodoValue} = props;
    
    return (
        <header>
            <input value={todoValue} onChange={(e) => {
                setTodoValue(e.target.value)
            }} type="text" placeholder="Enter Todo..." />
            <button onClick={() => {
                handleAddTodos(todoValue)
                setTodoValue('')
            }}>Add</button>
        </header>
    )
}
