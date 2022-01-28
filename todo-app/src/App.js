import logo from './logo.svg';
import './App.css';
import React, {useState} from "react";

function App() {
  const [todos, setTodos]= useState([]);
  return (
    <div className="App">
      <header className="App-header">
        <p>React ToDo</p>
      </header>
    </div>
  );
}

export default App;
