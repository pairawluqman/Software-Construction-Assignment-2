import React from 'react';
import ToDoItem from './ToDoItem';

const ToDoList = ({ tasks, toggleComplete, deleteTask, editTask }) => {

  if (!tasks || tasks.length === 0) {
    return <div className="todo-list">No tasks available.</div>;
  }

  return (
    <div className="todo-list">
      {tasks.map(task => (
        <ToDoItem 
          key={task.id} 
          task={task} 
          toggleComplete={toggleComplete}
          deleteTask={deleteTask}
          editTask={editTask}
        />
      ))}
    </div>
  );
};

export default ToDoList;
