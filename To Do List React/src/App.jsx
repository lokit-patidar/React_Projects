import { flushSync } from "react-dom";
import ToDoInput from "./components/Todoinput"
import ToDoList from "./components/Todolist"
import { useState, useEffect } from "react";
function App() {
  const [todo, setTodo] = useState([]);
  const [todoValue, setTodoValue] = useState('');

  function persistData(newList) {
    localStorage.setItem('todo',JSON.stringify({todo:newList}))
  }

  function handleAddTodos(newTodo) {
    const newTodoList = [...todo, newTodo];
    persistData(newTodoList)
    setTodo(newTodoList);
  }

  function handleDeleteTodos(index) {
    const newTodoList = todo.filter((todo, todoIndex) => {
      return todoIndex !== index
    })
    persistData(newTodoList)
    setTodo(newTodoList)
  }

  function handleEditTodos(index) {
    const valueToBeEdited = todo[index]
    setTodoValue(valueToBeEdited)
    handleDeleteTodos(index)
  }

  useEffect(() => {
    if (!localStorage) {
      return
    }
    let localTodos = localStorage.getItem('todo')
    if (!localTodos) {
      return
    }
    localTodos = JSON.parse(localTodos).todo
    setTodo(localTodos)
  }, [])

  return (
    <>
      <ToDoInput todoValue={todoValue} setTodoValue={setTodoValue} handleAddTodos={handleAddTodos} />
      <ToDoList handleEditTodos={handleEditTodos} handleDeleteTodos={handleDeleteTodos} todo={todo} />
    </>
  )
}

export default App
