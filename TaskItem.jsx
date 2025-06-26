import React, { useState } from 'react';

function TaskItem({ task, onToggle, onDelete, onUpdate }) {
  const [isEditing, setIsEditing] = useState(false);
  const [updated, setUpdated] = useState(task);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdated(prev => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    onUpdate(task.id, updated);
    setIsEditing(false);
  };

  return (
    <div className={`task-item ${task.completed ? 'completed' : ''}`}>
      {isEditing ? (
        <>
          <input name="title" value={updated.title} onChange={handleChange} />
          <input name="description" value={updated.description} onChange={handleChange} />
          <input type="date" name="date" value={updated.date} onChange={handleChange} />
          <input type="time" name="time" value={updated.time} onChange={handleChange} />
          <button onClick={handleSave}>💾 Save</button>
        </>
      ) : (
        <>
          <h3>{task.title}</h3>
          <p>{task.description}</p>
          <small>{task.date} {task.time}</small>
          <div>
            <button onClick={() => onToggle(task.id)}>✔️</button>
            <button onClick={() => setIsEditing(true)}>✏️</button>
            <button onClick={() => onDelete(task.id)}>🗑️</button>
          </div>
        </>
      )}
    </div>
  );
}

export default TaskItem;
