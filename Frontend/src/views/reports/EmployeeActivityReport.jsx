import React from 'react';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';
import { CategoryScale, LinearScale, Chart } from 'chart.js';

Chart.register(CategoryScale, LinearScale);


const EmployeeActivityReport = () => {
  const data = {
    labels: [
      '9:00 AM - 9:15 AM',
      '9:15 AM - 9:30 AM',
      '9:30 AM - 9:45 AM',
      '9:45 AM - 10:00 AM',
      '10:00 AM - 10:15 AM',
    ],
    datasets: [
      {
        label: 'Screen Time',
        data: [20, 25, 20, 20, 20], // Placeholder data (in minutes)
        backgroundColor: ['#FF9B9B', '#6527BE', '#7672FF', '#3F2305', '#A2FF86'], // Color palette for each window
        hoverBackgroundColor: ['#FF9B9B', '#6527BE', '#9090FF', '#3F2305', '#A2FF86'], // Hover color palette
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        type: 'category', // Use category scale for x-axis
      },
      y: {
        beginAtZero: true,
        ticks: {
          precision: 0,
        },
      },
    },
  };
  

  const windows = ['Website 1', 'Website 2', 'VSCode', 'ChatGPT', 'Website 3']; // Placeholder window names

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="bg-white shadow-lg rounded-lg px-6 py-4 w-2/3">
        <h2 className="text-2xl font-semibold mb-4">Employee Activity Report</h2>

        <div className="flex flex-col">
          <div className="flex">
            <div className="w-1/4">
              <h3 className="font-medium">Date</h3>
            </div>
            <div className="w-3/4">
              <h3 className="font-medium">Timeline</h3>
            </div>
          </div>

          <div className="flex">
            <div className="w-1/4">
              <p>July 1, 2023</p>
            </div>
            <div className="w-3/4">
              <Bar data={data} options={options} />
            </div>
          </div>

          
        </div>
      </div>
      <div className="bg-white box min-h-screen rounded-3xl m-8 shadow-2xl w-1/6">
            <h3 className="font-medium">Window Color Palette</h3>
            <div className="flex flex-col mt-2">
              {windows.map((window, index) => (
                <div key={window} className="flex items-center mr-4">
                  <div
                    className="w-4 h-4 rounded-full mr-2"
                    style={{ backgroundColor: data.datasets[0].backgroundColor[index] }}
                  ></div>
                  <p>{window}</p>
                </div>
              ))}
            </div>
          </div>
    </div>
  );
};

export default EmployeeActivityReport;
