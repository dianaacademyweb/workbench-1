import React, { useState } from 'react';

const MyCalendar = () => {
  // Get the current date to initialize the calendar state
  const currentDate = new Date();

  // State for the selected month and year
  const [selectedDate, setSelectedDate] = useState(currentDate);

  // Function to handle changing the selected date
  const handleDateChange = (value) => {
    setSelectedDate(new Date(value));
  };

  // Function to generate an array of days for the selected month
  const getDaysForMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const days = [];

    // Fill in the days of the previous month leading up to the first day of the selected month
    let prevMonthDay = new Date(firstDay);
    prevMonthDay.setDate(firstDay.getDate() - 1);
    while (prevMonthDay.getDay() !== 6) {
      days.unshift(prevMonthDay.getDate());
      prevMonthDay.setDate(prevMonthDay.getDate() - 1);
    }

    // Fill in the days of the selected month
    for (let i = 1; i <= lastDay.getDate(); i++) {
      days.push(i);
    }

    // Fill in the days of the next month to complete the grid
    let nextMonthDay = new Date(lastDay);
    nextMonthDay.setDate(lastDay.getDate() + 1);
    while (nextMonthDay.getDay() !== 0) {
      days.push(nextMonthDay.getDate());
      nextMonthDay.setDate(nextMonthDay.getDate() + 1);
    }

    return days;
  };

  // Get an array of days for the selected month
  const daysForMonth = getDaysForMonth(selectedDate);

  return (
    <div className="bg-white p-4 shadow-md rounded-md mb-4">
      <h2 className="text-xl font-bold mb-2">My Calendar</h2>
      <div className="mb-4">
        <input
          type="month"
          value={selectedDate.toISOString().slice(0, 7)}
          onChange={(e) => handleDateChange(e.target.value)}
        />
      </div>
      <div className="grid grid-cols-7 gap-1">
        <div className="text-center text-gray-600 font-bold">Sun</div>
        <div className="text-center text-gray-600 font-bold">Mon</div>
        <div className="text-center text-gray-600 font-bold">Tue</div>
        <div className="text-center text-gray-600 font-bold">Wed</div>
        <div className="text-center text-gray-600 font-bold">Thu</div>
        <div className="text-center text-gray-600 font-bold">Fri</div>
        <div className="text-center text-gray-600 font-bold">Sat</div>
        {daysForMonth.map((day, index) => (
          <div
            key={index}
            className={`text-center  p-2 rounded-md`}
          >
            {day}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyCalendar;
