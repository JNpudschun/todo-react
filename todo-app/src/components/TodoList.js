import React ,{useState} from "react";
import Todo from "./Todo";

function TodoList({ todos, toggleComplete, removeTodo }) {
    //const [localTodos, setLocalTodos]= useState({todos});
    
    console.log(todos);
    return (
        <ul>
            {todos.map(todo => (
                <Todo 
                    key={todo.id} 
                    todo={todo} 
                    toggleComplete={toggleComplete} 
                    removeTodo={removeTodo}
                />
            ))}
        </ul>
    )
}
export default TodoList;