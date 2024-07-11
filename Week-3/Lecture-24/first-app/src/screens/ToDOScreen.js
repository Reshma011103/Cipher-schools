import { useState } from "react";
import Task from "../Components/Task";
const ToDoScreen =() =>{

  const [taskList, setTaskList] = useState([]);

  let addNewTask = (task) => {
    setTaskList([...taskList, {...task, createdDate: new Date() }]);
  };
return (
  <>
  <div className="screen">
      <h1 className="ui heading center">To Do List </h1>
      <div>
        <button
         onClick={(e) => {
        setTaskList( [
          ...taskList,
           {
              title:"Go to Gym",
              description: "Going to gym is good formuscle growth.",
              createdDate: new Date(),

      },
    ]);
        }} 
        className="ui secondary button">
         Add Task
      </button>
      <div className="ui cards">
      {taskList.map((task , index) => (
        <Task task={task} key={index} />
        ))}
      </div>
       
      </div>
      <add task onsubmit={addNewTask} />
    </div>
   
    </>
  );
};




export default ToDoScreen;