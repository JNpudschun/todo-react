import React, {useState} from "react";

function TodoForm(){
    const [todo, setTodo] = useState({
        id:"",
        task:"",
        completed: false
    })
    function handleTaskInputChange(e){
        setTodo({...todo, task: e.target.value});
    }
    return(
        <form>
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