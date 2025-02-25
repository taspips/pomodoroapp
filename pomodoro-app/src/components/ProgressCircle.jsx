// src/components/ProgressCircle.jsx
import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const ProgressCircle = ({ percentage }) => {
  return (
    <div className="w-40 h-40 mx-auto mb-4">
      <CircularProgressbar
        value={percentage}
        text={`${Math.round(percentage)}%`}
        styles={buildStyles({
          textSize: '20px',
          pathColor: '#4CAF50',
          textColor: '#333',
          trailColor: '#d6d6d6',
        })}
      />
    </div>
  );
};

export default ProgressCircle;
