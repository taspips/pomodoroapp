// src/components/History.jsx
import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, PointElement, CategoryScale, LinearScale } from 'chart.js';

ChartJS.register(LineElement, PointElement, CategoryScale, LinearScale);

const History = () => {
  const data = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Pomodoros Completed',
        data: [3, 5, 2, 4, 6, 2, 4],
        borderColor: '#4CAF50',
        backgroundColor: 'rgba(76, 175, 80, 0.2)',
        borderWidth: 2,
        tension: 0.4,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 1,
        },
      },
    },
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: '#333',
        },
      },
    },
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-500 p-10">
      <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-200 text-center mb-10">
        Productivity History
      </h1>
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 max-w-4xl mx-auto transition-colors duration-500">
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default History;
