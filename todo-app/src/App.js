import './App.css';
import React, {useEffect, useState} from "react";
import TodoForm from "./components/TodoForm.js";
import TodoList from "./components/TodoList";

const LOCAL_STORAGE_KEY = "rect-todolist-todos"

function App() {
  const [todos, setTodos]= useState([]);
  
  useEffect(() => {
    const storagedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if(storagedTodos){
      setTodos(storagedTodos);
    }
  },[])
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  },[todos])

function addTodo(todo){
  setTodos({todo,...todos})
}
  return (
    <div className="App">
      <header className="App-header">
        <p>React ToDo</p>
        <TodoForm addTodo={addTodo}/>
        <TodoList todos={todos}/>
      </header>
    </div>
  );
}

export default App;
