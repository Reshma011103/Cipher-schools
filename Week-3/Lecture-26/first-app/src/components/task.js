const Task (props) => {

    console.log(props); I
    
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
    
        <div className="ui basic green button">Edit</div>
    
        <div className="ui basic red button">Delete</div>
    
    </div>
    
  </div>
    
</div>
    
    );
    
    };
    
    export default Task;