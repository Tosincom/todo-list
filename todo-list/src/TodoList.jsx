import React, { useState } from "react";

function TodoList({ tasks, handleChange, handleDelete }) {
  return (
    <div className="todo">
      <ul className="list">
        {tasks.map((task) => (
          <li className="tasks" key={task.id}>
            <input
              className="i"
              type="checkbox"
              checked={task.checked}
              onChange={() => handleChange(task.id)}
            />
            <label htmlFor="" className="label">
              {task.task}
            </label>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            <button onClick={() => handleDelete(task)} className="delete">
              delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
} 

export default TodoList;
