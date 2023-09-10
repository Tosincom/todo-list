import React from "react";
import "./index.css"
function AddTodo({ newTasks, setNewTasks, handleSubmit, }) {
 
  return (
    <div className="addTodo">
      <form action="" onSubmit={handleSubmit} className="form">
        <input 
        className="input"
        type="text" 
        name="Add task" 
        placeholder="input your task" 
        value={newTasks}
        required
        onChange={(e)=> setNewTasks(e.target.value)}/>
        
        
        <button className="Add">Add task</button>
      </form>
    </div>
  );
}

export default AddTodo;
