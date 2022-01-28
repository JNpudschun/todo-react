import React, {useState} from "react";
import uuid from "uuid";

function TodoForm({addTodo}){
    const [todo, setTodo] = useState({
        id:"",
        task:"",
        completed: false
    })
    function handleTaskInputChange(e){
        setTodo({...todo, task: e.target.value});
    }
    function handleSubmit(e){
        e.preventDefault();
        if(todo.task.trim()){
            addTodo({...todo, id:uuid.v4()});
            //clear task input
            setTodo({...todo, task:""});
        }
    }
    return(
        <form onSubmit={handleSubmit}>
            <input
            name="task"
            value={todo.task}
            type="text"
            onChange={handleTaskInputChange}
            />
            <button type="submit"/>
        </form>
    );
}
export default TodoForm;