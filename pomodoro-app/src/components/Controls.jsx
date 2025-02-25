// src/components/Controls.jsx
import React from 'react';

const Controls = ({ isActive, onStart, onPause, onReset }) => {
  return (
    <div className="mt-6 flex justify-center gap-4">
      {!isActive ? (
        <button
          onClick={onStart}
          className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition-colors"
        >
          Start
        </button>
      ) : (
        <button
          onClick={onPause}
          className="bg-yellow-500 text-white px-6 py-2 rounded-lg hover:bg-yellow-600 transition-colors"
        >
          Pause
        </button>
      )}
      <button
        onClick={onReset}
        className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition-colors"
      >
        Reset
      </button>
    </div>
  );
};

export default Controls;
