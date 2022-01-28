import logo from './logo.svg';
import './App.css';
import React, {useState} from "react";
import TodoForm from "./components/TodoForm.js";

function App() {
  const [todos, setTodos]= useState([]);

function addTodo(todo){
  setTodos({todo,...todos})
}
  return (
    <div className="App">
      <header className="App-header">
        <p>React ToDo</p>
        <TodoForm addTodo={addTodo}/>
      </header>
    </div>
  );
}

export default App;
