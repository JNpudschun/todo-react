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
  function toggleComplete(id){
    setTodos(
      todos.map( todo => {
        if(todo.id === id){
          return {
            ...todo, completed: !todo.completed
          };
        }
        return todo;
      })
    );

  }
  function removeTodo(id){
    setTodos(todos.filter(todo => todo.id !== id));
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>React ToDo</p>
        <TodoForm addTodo={addTodo}/>
        <TodoList todos={todos} toggleComplete={toggleComplete} removeTodo={removeTodo}/>
      </header>
    </div>
  );
}

export default App;
