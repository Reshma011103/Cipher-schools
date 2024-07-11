import { createContext, useState } from "react";
import { v4 as randomUUID}

const TaskContext = createContext();
const task_EDITABLE_FIELD_LIST = ["title","description"]

const TaskProvider = ({ children }) => {

   const [taskList, setTaskList] = useState([]);

const addNewTask = (task) => {

  setTaskList([...taskList, {...task, createdDate: new Date(), taskId: randomUUID}]); 
};

const deleteTask = (taskId) => {
  setTaskList.filter((task) => task.taskId !== taskId);

};
   const editTask = (task) => {

      let tempTaskList = [...taskList];
  
      for (let t of tempTaskList){
  
        if (t.taskId === task.taskId) {
  
          TASK_EDITABLE_FIELD_LIST.forEach((field) => (t[field] = task[field]));
  
  }
  
  setTaskList(taskList);
  
  };

return (

   <TaskContext.Provider value={{ taskList, addNewTask, deleteTask, editTask }}>
     {children}

   </TaskContext.Provider>

);
};

export { TaskProvider };

export default TaskContext;