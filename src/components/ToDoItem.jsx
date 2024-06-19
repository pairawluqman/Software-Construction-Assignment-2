import React from 'react';

const ToDoItem = ({ task, toggleComplete, deleteTask, editTask }) => {
  return (
    <div className="todo-item">
      <input 
        type="checkbox" 
        checked={task.completed} 
        onChange={() => toggleComplete(task.id)} 
      />
      <span className={task.completed ? 'completed' : ''}>
        {task.text}
      </span>
      <button className="edit" onClick={() => editTask(task.id)}>Edit</button>
      <button className="delete" onClick={() => deleteTask(task.id)}>Delete</button>
    </div>
  );
};

export default ToDoItem;
