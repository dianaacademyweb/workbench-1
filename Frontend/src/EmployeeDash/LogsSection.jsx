import React from 'react';

const LogsSection = () => {
  // Sample data for logs
  const logs = [
    { id: 1, title: 'Meeting with the team', date: '2023-07-26' },
    { id: 2, title: 'Completed project milestone', date: '2023-07-25' },
    { id: 3, title: 'Submitted quarterly report', date: '2023-07-24' },
    // Add more logs as needed
  ];

  return (
    <div className="bg-white p-4 shadow-md rounded-md mb-4">
      <h2 className="text-xl font-bold mb-2">My Logs</h2>
      <ul className="list-disc pl-6">
        {logs.map((log) => (
          <li key={log.id} className="text-gray-600 mb-2">
            {log.title} - {log.date}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LogsSection;
