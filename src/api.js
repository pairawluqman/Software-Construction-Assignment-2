import axios from 'axios';

const BASE_URL = 'http://localhost:3500';


export const fetchTasks = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/tasks`);
    return response.data.tasks;
  } catch (error) {
    console.error('Error fetching tasks:', error);
    return [];
  }
};


export const addTask = async (text) => {
  try {
    const response = await axios.post(`${BASE_URL}/tasks`, { text, completed: false });
    return response.data;
  } catch (error) {
    console.error('Error adding task:', error);
    return null;
  }
};


export const deleteTask = async (id) => {
  try {
    await axios.delete(`${BASE_URL}/tasks/${id}`);
  } catch (error) {
    console.error('Error deleting task:', error);
  }
};

export const toggleComplete = async (id) => {
  try {
    const response = await axios.put(`${BASE_URL}/tasks/${id}/toggle`);
    return response.data;
  } catch (error) {
    console.error('Error toggling task completion:', error);
    return null;
  }
};


export const editTask = async (id, newText) => {
  try {
    const response = await axios.put(`${BASE_URL}/tasks/${id}`, { text: newText });
    return response.data;
  } catch (error) {
    console.error('Error editing task:', error);
    return null;
  }
};
