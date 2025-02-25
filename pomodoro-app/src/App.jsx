// src/App.jsx
import React, { useState, useEffect } from 'react';
import Timer from './components/Timer';
import TaskList from './components/TaskList';
import Controls from './components/Controls';
import ProgressCircle from './components/ProgressCircle';
import Navbar from './components/Navbar';

const App = () => {
  const WORK_DURATION = 25 * 60;
  const BREAK_DURATION = 5 * 60;

  const [time, setTime] = useState(WORK_DURATION);
  const [isActive, setIsActive] = useState(false);
  const [isBreak, setIsBreak] = useState(false);
  const [darkMode, setDarkMode] = useState(localStorage.getItem('theme') === 'dark');

  // Timer countdown logic
  useEffect(() => {
    let countdown;
    if (isActive && time > 0) {
      countdown = setInterval(() => setTime(prev => prev - 1), 1000);
    } else if (time === 0) {
      clearInterval(countdown);
      setIsBreak(prev => !prev);
      setTime(isBreak ? WORK_DURATION : BREAK_DURATION);
    }
    return () => clearInterval(countdown);
  }, [isActive, time, isBreak]);

  // Theme toggle effect
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const startTimer = () => setIsActive(true);
  const pauseTimer = () => setIsActive(false);
  const resetTimer = () => {
    setIsActive(false);
    setIsBreak(false);
    setTime(WORK_DURATION);
  };

  const toggleTheme = () => setDarkMode(prev => !prev);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  const percentage = isBreak 
    ? (time / BREAK_DURATION) * 100 
    : (time / WORK_DURATION) * 100;

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-500">
      <Navbar darkMode={darkMode} toggleTheme={toggleTheme} />
      <div className="pt-20 pb-10 px-4 max-w-screen-lg mx-auto">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Timer and Controls Section */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 text-center transition-colors duration-500 w-full md:w-1/2">
            <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">
              {isBreak ? 'Break Time' : 'Focus Time'}
            </h1>
            <ProgressCircle percentage={percentage} />
            <Timer minutes={minutes} seconds={seconds} />
            <Controls 
              isActive={isActive} 
              onStart={startTimer} 
              onPause={pauseTimer} 
              onReset={resetTimer} 
            />
          </div>
          {/* Task List Section */}
          <div className="w-full md:w-1/2">
            <TaskList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
