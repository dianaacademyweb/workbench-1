import React from 'react';

const Notifications = ({ notifications }) => {
  return (
    <div className="bg-gradient-to-r from-blue-100 to-purple-100 p-4 shadow-md rounded-md mb-4">
      <h2 className="text-2xl font-bold mb-4 text-blue-900">Notifications</h2>
      {notifications.length > 0 ? (
        <ul className="list-none">
          {notifications.map((notification) => (
            <li key={notification.id} className="mb-4">
              <h3 className="text-lg font-bold  text-blue-900">{notification.title}</h3>
              <p className="text-gray-600 mb-1">{notification.description}</p>
              <p className="text-gray-800">{notification.date}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-600">No notifications to display.</p>
      )}
    </div>
  );
};
export default Notifications;
