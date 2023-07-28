import React from 'react';

const BulletinBoard = () => {
  // Sample data for bulletin board items
  const bulletinItems = [
    { id: 1, title: 'Team Building Event', date: '2023-08-10', description: 'Join us for a fun team-building event.' },
    { id: 2, title: 'New Project Announcement', date: '2023-08-01', description: 'We have an exciting new project coming up!' },
    // Add more bulletin items as needed
  ];

  return (
    <div className="bg-white p-4 shadow-md rounded-md mb-4">
      <h2 className="text-xl font-bold mb-2">Bulletin Board</h2>
      <ul className="list-none">
        {bulletinItems.map((item) => (
          <li key={item.id} className="mb-4">
            <h3 className="text-lg font-bold mb-1">{item.title}</h3>
            <p className="text-gray-600 mb-1">Date: {item.date}</p>
            <p className="text-gray-600">{item.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BulletinBoard;
