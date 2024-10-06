import { useState } from "react";
import "./toDo.css"
function ToDo()
{ 
    const [Task,setTask] = useState("");
    const [tasks, setTasks] = useState([]); // Store all tasks in an array
    let msg,list;
    function fetch_set_Tasks(event)
    {
       msg =event.target.value;
       setTask(msg);
    }

    const addTask = () => {
        if (Task.trim() !== "") {  // Check if the input is not empty
          setTasks([...tasks, Task]); // Add new task to the list
          setTask(""); // Clear the input after adding the task
        }
      };

      const removeTask=(index)=>{
        const newTasks = tasks.filter((_, i) => i !== index); // Keep all tasks except the one at the index
        setTasks(newTasks); // Update the tasks list
        console.log("Task removed. Updated tasks:", newTasks);

      };
    return(
        <>
        <center>
          <div>
             <input type="text" value={Task} placeholder="Enter a task here..." onChange={fetch_set_Tasks} style={{backgroundColor:"honeydew"}}/>
             
            <button onClick={addTask} style={{backgroundColor:"lightcoral"}}>Add Task</button>
            </div>
            <div style={{width:"600px",height:"800px",backgroundColor:"lightyellow"}}>
            <h1 style={{color:"blueviolet"}}>Tasks:</h1>
            <ol>
               {tasks.map((t, index) => (
               <li style={{margin:"5px"}}key={index}>{t}{" "}
               <button onClick={() => removeTask(index)} style={{color:"black",backgroundColor:"pink"}}>Remove task</button>
               </li>))}  
               
           </ol>  
          </div>
          </center>
        </>
    );
}

export default ToDo;