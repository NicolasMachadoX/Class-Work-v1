import React, { useState } from 'react';
import './TaskList.css';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleAddTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, { id: tasks.length + 1, title: newTask, status: 'created' }]);
      setNewTask('');
    }
  };

  const handleUpdateStatus = (id, newStatus) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, status: newStatus } : task
    ));
  };

  const handleDeleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div className="task-list">
      <h2>Task List</h2>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            {task.title} - Status: {task.status}
            {task.status !== 'completed' && (
              <button onClick={() => handleUpdateStatus(task.id, 'in progress')}>In Progress</button>
            )}
            {task.status !== 'completed' && (
              <button onClick={() => handleUpdateStatus(task.id, 'completed')}>Completed</button>
            )}
            <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <div className='text'>
        <input 
          type="text" 
          value={newTask} 
          onChange={(e) => setNewTask(e.target.value)} 
          placeholder="New task" 
        />
        <button onClick={handleAddTask}>Add Task</button>
      </div>
    </div>
  );
};

export default TaskList;
