// src/components/Timer.jsx
import React from 'react';

const Timer = ({ minutes, seconds }) => {
  return (
    <div className="text-center">
      <div className="text-6xl font-bold">
        {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
      </div>
    </div>
  );
};

export default Timer;
