import React from 'react';

const LocationTime = () => {
  const currentLocation = 'Office';
  const currentTime = new Date().toLocaleTimeString();

  return (
    <div className="bg-white p-4 shadow-md rounded-md mb-4">
      <h2 className="text-xl font-bold mb-2">Location and Time</h2>
      <div>
        <p className="text-gray-600 mb-1">Location: {currentLocation}</p>
        <p className="text-gray-600 mb-1">Time: {currentTime}</p>
      </div>
    </div>
  );
};

export default LocationTime;
