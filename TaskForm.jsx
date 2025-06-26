import React, { useState } from 'react';

function TaskForm({ onAdd }) {
  const [task, setTask] = useState({ title: '', description: '', date: '', time: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.title.trim()) {
      onAdd(task);
      setTask({ title: '', description: '', date: '', time: '' });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="task-form mb-4">
      <div className="row g-3">
        <div className="col-md-6">
          <input
            name="title"
            value={task.title}
            onChange={handleChange}
            placeholder="Task Title"
            required
            className="form-control"
          />
        </div>

        <div className="col-md-6">
          <input
            name="description"
            value={task.description}
            onChange={handleChange}
            placeholder="Description"
            className="form-control"
          />
        </div>

        <div className="col-md-6">
          <input
            type="date"
            name="date"
            value={task.date}
            onChange={handleChange}
            className="form-control"
          />
        </div>

        <div className="col-md-6">
          <input
            type="time"
            name="time"
            value={task.time}
            onChange={handleChange}
            className="form-control"
          />
        </div>

        <div className="col-12">
          <button type="submit" className="btn btn-primary w-100">
            Add ➕
          </button>
        </div>
      </div>
    </form>
  );
}

export default TaskForm;
