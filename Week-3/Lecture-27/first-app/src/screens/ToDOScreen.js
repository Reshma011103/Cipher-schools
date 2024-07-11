import { useContext } from "react";
import Task from "../Components/Task";
import TaskContext from "../context/TaskContext";
const ToDoScreen =() =>{

  const {taskList} = useContext(TaskContext);
  const { useNavigate } = useNavigate();

  };
return (
  <>
  <div className="screen">
      <h1 className="ui heading center">To Do List </h1>
      <div>
        <button
         onClick={(e) => {
          navigate("/add-task")
       
        }} 
        className="ui secondary button">
         Add Task
      </button>
      <div className="ui cards">
      {taskList.map((task ) => (
        <Task task={task} key={task.taskId} />
        ))}
      </div>
       
      </div>
      {/* <add task onsubmit={addNewTask} />*/}
    </div>
   
    </>
  );
};




export default ToDoScreen;