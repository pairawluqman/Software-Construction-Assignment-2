import React, { useState, useEffect } from 'react';
import './App.css';
import ToDoList from './components/ToDoList';
import AddTask from './components/AddTask';
import axios from 'axios';

const BASE_URL = 'http://localhost:3500';

const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/tasks`);
        console.log('Tasks fetched:', response.data); 
        setTasks(response.data); 
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };
  
    fetchTasks();
  }, []);
  
  

  const addTask = async (text) => {
    try {
      const response = await axios.post(`${BASE_URL}/tasks`, { text, completed: false });
      const newTask = response.data;
      setTasks([...tasks, newTask]);
    } catch (error) {
      console.error('Error adding task:', error);
    }
  };

  const deleteTask = async (id) => {
    try {
      await axios.delete(`${BASE_URL}/tasks/${id}`);
      setTasks(tasks.filter(task => task.id !== id));
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };
  /*
  non RESTFUL Version
  
  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };
  */

  const toggleComplete = (id) => {
    setTasks(tasks.map(task => {
      if (task.id === id) {
        return { ...task, completed: !task.completed };
      }
      return task;
    }));
  };

  const editTask = (id) => {
    const newTaskName = prompt('Enter new task name:');
    if (newTaskName) {
      setTasks(tasks.map(task => {
        if (task.id === id) {
          return { ...task, text: newTaskName };
        }
        return task;
      }));
    }
  };

  return (
    <div className="App">
      <h1>Local RESTful To-Do List</h1>
      <AddTask addTask={addTask} />
      <ToDoList
        tasks={tasks}
        deleteTask={deleteTask}
        toggleComplete={toggleComplete}
        editTask={editTask}
      />
    </div>
  );
};

export default App;


/*
const deleteTask = async (id) => {
    try {
      await axios.delete(`${BASE_URL}/tasks/${id}`);
      setTasks(tasks.filter(task => task.id !== id));
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  const toggleComplete = async (id) => {
    try {
      const response = await axios.put(`${BASE_URL}/tasks/${id}/toggle`);
      const updatedTask = response.data;
      setTasks(tasks.map(task => {
        if (task.id === id) {
          return { ...task, completed: updatedTask.completed };
        }
        return task;
      }));
    } catch (error) {
      console.error('Error toggling task completion:', error);
    }
  };

  const editTask = async (id, newText) => {
    try {
      const response = await axios.put(`${BASE_URL}/tasks/${id}`, { text: newText });
      const updatedTask = response.data;
      setTasks(tasks.map(task => {
        if (task.id === id) {
          return { ...task, text: updatedTask.text };
        }
        return task;
      }));
    } catch (error) {
      console.error('Error editing task:', error);
    }
  };

*/