import React, { useState } from 'react';

const AddTask = ({ addTask }) => {
  const [task, setTask] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    addTask(task);
    setTask('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={task} 
        onChange={(e) => setTask(e.target.value)} 
        placeholder="Add a new task"
        required 
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddTask;
