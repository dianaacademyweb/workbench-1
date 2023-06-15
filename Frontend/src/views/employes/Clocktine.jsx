import React, { useState } from 'react';

const Clock = () => {
  const [rotationAngle, setRotationAngle] = useState(0);

  const updateSelectedTime = () => {
    const hours = Math.floor((rotationAngle / 360) * 12);
    const minutes = Math.floor((rotationAngle / 360) * 60);
    const timeString = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
    document.getElementById('selectedTime').value = timeString;
  };

  const startRotation = (event) => {
    event.preventDefault();
    document.addEventListener('mousemove', rotateHand);
    document.addEventListener('touchmove', rotateHand);
    document.addEventListener('mouseup', stopRotation);
    document.addEventListener('touchend', stopRotation);
  };

  const rotateHand = (event) => {
    event.preventDefault();

    const rect = event.target.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const angle = Math.atan2(event.clientY - centerY, event.clientX - centerX);
    const degrees = (angle * 180) / Math.PI;
    setRotationAngle(degrees >= 0 ? degrees : 360 + degrees);
    updateSelectedTime();
  };

  const stopRotation = () => {
    document.removeEventListener('mousemove', rotateHand);
    document.removeEventListener('touchmove', rotateHand);
  };

  return (
    <div className="clock w-64 h-64 relative rounded-full bg-white border-4 border-gray-300 shadow-lg" onMouseDown={startRotation} onTouchStart={startRotation}>
      <div className="hour-hand absolute top-1/2 left-1/2 bg-black h-24 w-2 rounded transform origin-bottom" style={{ transform: `rotate(${rotationAngle / 12}deg)` }}></div>
      <div className="minute-hand absolute top-1/2 left-1/2 bg-black h-32 w-2 rounded transform origin-bottom" style={{ transform: `rotate(${rotationAngle}deg)` }}></div>
      <div className="second-hand absolute top-1/2 left-1/2 bg-red-500 h-36 w-1 rounded transform origin-bottom" style={{ transform: `rotate(${rotationAngle * 60}deg)` }}></div>
    </div>
  );
};

export default Clock;
