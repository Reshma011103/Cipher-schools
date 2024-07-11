import { useContext } from "react";

import { formatDate } from "../utils/DateUtil";

import TaskContext from "../context/TaskContext";

const Task = ({ task: { title, description, createdDate, taskId } }) => {

   const {deleteTask} = useContext(TaskContext);
   const[isEditing, setIsEditing] = useState(false);
   const[task,setTask] = useState({title:"", description: "", taskId })

   let handleInputChange = (e) => {
    setTask({
        ...task,
        [e.target.name]: e.target.value,
    })
};

   if (isEditing){
           return(

            <div className="card">
    
            <div className="content">
            <div className="ui form">

            <div className="field">
            <label>Title</label>
            <input 
             type="text" 
             spellcheck={false}
             data-ms-editor={true}
             placeholder="Task title"
             name="title"
             onChange={handleInputChange}
             value={task.title}
             /> 
             </div>
             </div>
         
              <div className="header">Go to Gym</div>
         
              <div className="meta">Created date</div>
              <div className="field">
    
         <label>description</label>
    
         <textarea
    
          rows="2"
    
          spellcheck={false}
          data-ms-editor={true}
          placeholder="Task description"
          name="description"
          onChange={handleInputChange}
          value={task.description}
    
        ></textarea>
         
              <div className="description">
         
                 Going to gym is good for muscle growth.
         
              </div> 
          </div>
     
          <div className="extra content">
     
         
           <div className="ui two buttons">
         
             <div className="ui basic green button" onClick={()  => editTask(Task)}>save</div>
         
             <div className="ui basic red button"onClick={() => setIsEditing(false)}>cancel</div>
         
         </div>
         
       </div>
       </div>
     </div>
         
           )
   }else{
    return (
    
     <div className="card">
    
       <div className="content">
    
         <div className="header">Go to Gym</div>
    
         <div className="meta">Created date</div>
    
         <div className="description">
    
            Going to gym is good for muscle growth.
    
         </div> 
     </div>

     <div className="extra content">

    
      <div className="ui two buttons">
    
        <div className="ui basic green button" onClick={()  => setIsEditing(true)}>edit</div>
    
        <div className="ui basic red button"onClick={() => deleteTask(taskId)}>delete</div>
    
    </div>
    
  </div>
    
</div>
    
    );
  }
    
    };
    
    export default Task;