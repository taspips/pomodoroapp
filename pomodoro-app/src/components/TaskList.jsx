// src/components/TaskList.jsx
import React, { useState, useEffect } from 'react';
import { PencilIcon, TrashIcon, PlusIcon } from '@heroicons/react/24/solid';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [editingIndex, setEditingIndex] = useState(null);

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (savedTasks) {
      setTasks(savedTasks);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const editTask = (index) => {
    setEditingIndex(index);
    setNewTask(tasks[index]);
  };

  const saveTask = () => {
    const updatedTasks = tasks.map((task, index) =>
      index === editingIndex ? newTask : task
    );
    setTasks(updatedTasks);
    setEditingIndex(null);
    setNewTask('');
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 w-full max-w-sm transition-colors duration-500">
      <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-4">Tasks</h2>
      <ul className="space-y-4">
        {tasks.map((task, index) => (
          <li key={index} className="flex justify-between items-center bg-gray-100 dark:bg-gray-700 p-2 rounded-lg">
            <span className="text-gray-800 dark:text-gray-200">{task}</span>
            <div className="flex gap-2">
              <button onClick={() => editTask(index)} className="text-blue-500 hover:text-blue-700">
                <PencilIcon className="h-5 w-5" />
              </button>
              <button onClick={() => deleteTask(index)} className="text-red-500 hover:text-red-700">
                <TrashIcon className="h-5 w-5" />
              </button>
            </div>
          </li>
        ))}
      </ul>
      <div className="mt-4 flex">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          className="w-full p-2 rounded-l-lg border border-gray-300 dark:border-gray-700 dark:bg-gray-700 dark:text-gray-200 focus:outline-none"
          placeholder="New task..."
        />
        <button
          onClick={editingIndex !== null ? saveTask : addTask}
          className="bg-green-500 text-white p-2 rounded-r-lg hover:bg-green-600 transition-colors"
        >
          {editingIndex !== null ? 'Save' : <PlusIcon className="h-5 w-5" />}
        </button>
      </div>
    </div>
  );
};

export default TaskList;
