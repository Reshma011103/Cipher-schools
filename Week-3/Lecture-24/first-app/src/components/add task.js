import {usestate}
const AddTask = ({onSubmit}) => {

     const [task, setTask] =usestate({
        title: "",
        description: "",
     })

    let handleInputChange = (e) => {
        setTask({
            ...task,
            [e.target.name]: e.target.value,
        })
    };

    let onFormSubmit = (e)  => {
        e.preventDefault();
        console.log(task);
        onsubmit(task);
    };
    return (
    <>
    <h3 className="ui heading center">Add New Task</h3>
    <div div className="ui form">
      <form onsubmit={onFormSubmit}>
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
   
       <div className="field">
    
         <label>description</label>
    
         <textarea
    
          rows="2"
    
          spellcheck={false}
          data-ms-editor={true}
          placeholder="Task description"
          name="description"
          onChange={handleInputChange}
          value={task.title}
    
        ></textarea>
       </div>
       <button type="submit" className="ui primary button">submit</button>
      </form>
    </div>
    </>
    );
    };
    export default add task;