// src/components/Settings.jsx
import React, { useState, useEffect } from 'react';

const Settings = () => {
  const [workDuration, setWorkDuration] = useState(25);
  const [shortBreak, setShortBreak] = useState(5);
  const [longBreak, setLongBreak] = useState(15);
  const [soundNotification, setSoundNotification] = useState(true);

  // Load settings from local storage
  useEffect(() => {
    const savedSettings = JSON.parse(localStorage.getItem('settings'));
    if (savedSettings) {
      setWorkDuration(savedSettings.workDuration);
      setShortBreak(savedSettings.shortBreak);
      setLongBreak(savedSettings.longBreak);
      setSoundNotification(savedSettings.soundNotification);
    }
  }, []);

  // Save settings to local storage
  const saveSettings = () => {
    const settings = {
      workDuration,
      shortBreak,
      longBreak,
      soundNotification,
    };
    localStorage.setItem('settings', JSON.stringify(settings));
    alert('Settings saved successfully!');
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-500 p-10">
      <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-200 text-center mb-10">
        Settings
      </h1>
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 max-w-2xl mx-auto transition-colors duration-500 space-y-6">
        <div className="space-y-2">
          <label className="block text-gray-800 dark:text-gray-200">Work Duration (minutes)</label>
          <input
            type="range"
            min="15"
            max="60"
            value={workDuration}
            onChange={(e) => setWorkDuration(Number(e.target.value))}
            className="w-full"
          />
          <div className="text-center text-gray-800 dark:text-gray-200">{workDuration} minutes</div>
        </div>

        <div className="space-y-2">
          <label className="block text-gray-800 dark:text-gray-200">Short Break (minutes)</label>
          <input
            type="range"
            min="3"
            max="15"
            value={shortBreak}
            onChange={(e) => setShortBreak(Number(e.target.value))}
            className="w-full"
          />
          <div className="text-center text-gray-800 dark:text-gray-200">{shortBreak} minutes</div>
        </div>

        <div className="space-y-2">
          <label className="block text-gray-800 dark:text-gray-200">Long Break (minutes)</label>
          <input
            type="range"
            min="10"
            max="30"
            value={longBreak}
            onChange={(e) => setLongBreak(Number(e.target.value))}
            className="w-full"
          />
          <div className="text-center text-gray-800 dark:text-gray-200">{longBreak} minutes</div>
        </div>

        <div className="flex items-center gap-4">
          <label className="text-gray-800 dark:text-gray-200">Sound Notification</label>
          <input
            type="checkbox"
            checked={soundNotification}
            onChange={(e) => setSoundNotification(e.target.checked)}
            className="h-5 w-5 text-blue-600 bg-gray-200 rounded-md border-gray-300 focus:ring-blue-500"
          />
        </div>

        <button
          onClick={saveSettings}
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors"
        >
          Save Settings
        </button>
      </div>
    </div>
  );
};

export default Settings;
