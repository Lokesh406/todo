import React, { useState } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, { ...task, id: Date.now(), completed: false }]);
  };

  const toggleComplete = (id) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const updateTask = (id, updatedTask) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, ...updatedTask } : task));
  };

  return (
    <div className="app container my-4 p-3 bg-white rounded shadow">
      <h1 className="text-center text-primary mb-4">📝 SkillCraft To-Do App</h1>

      <TaskForm onAdd={addTask} />
      <TaskList
        tasks={tasks}
        onToggle={toggleComplete}
        onDelete={deleteTask}
        onUpdate={updateTask}
      />

      <footer className="footer mt-5 text-center p-4 bg-light rounded">
        <p className="mb-2"><strong>© lokesh 2025 SkillCraft Technologies. All rights reserved.</strong></p>
        <p className="mb-2">Performance optimized • Mobile-friendly</p>
        <p className="mb-0">
          <a href="https://x.com/LokeshN3255" target="_blank" rel="noopener noreferrer">Twitter</a> |{" "}
          <a href="https://www.linkedin.com/in/venkata-lokesh-babu-neelisetty-06665517a/" target="_blank" rel="noopener noreferrer">LinkedIn</a> |{" "}
          <a href="https://github.com/Lokesh406" target="_blank" rel="noopener noreferrer">GitHub</a>
        </p>
      </footer>
    </div> // ✅ Closing the main container div
  );
}

export default App;
