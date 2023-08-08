import React from "react";
import dashgroup from "../assets/Images/layouts/dashgroup.jpg";
import blur from "../assets/Images/layouts/blur.jpg";
import pro from "../assets/Images/layouts/pro.jpg";
import { FiSettings, FiCheckCircle } from "react-icons/fi";
import { AiOutlineClockCircle } from "react-icons/ai";
import Calendar from "react-calendar";
// import '/src/calendar.css'
import Notifications from "./Notifications";
const EmployeeDash = () => {

  const notifications = [
    {
      id: 1,
      title: 'New Task Assigned',
      description: 'You have been assigned a new task for the project.',
      date: '2023-07-27',
    },
    {
      id: 2,
      title: 'Meeting Reminder',
      description: 'Don\'t forget the team meeting at 3:00 PM today.',
      date: '2023-07-28',
    },
    // Add more notifications as needed
  ];


  const logs = [
    { id: 1, title: "Meeting with the team", date: "2023-07-26" },
    { id: 2, title: "Completed project milestone", date: "2023-07-25" },
    { id: 3, title: "Submitted quarterly report", date: "2023-07-24" },
    // Add more logs as needed
  ];
  const currentLocation = "Office";
  const currentTime = new Date().toLocaleTimeString();

  const bulletinItems = [
    {
      id: 1,
      title: "Team Building Event",
      date: "2023-08-10",
      description: "Join us for a fun team-building event.",
    },
    {
      id: 2,
      title: "New Project Announcement",
      date: "2023-08-01",
      description: "We have an exciting new project coming up!",
    },
    // Add more bulletin items as needed
  ];
  return (
    <div className="min-h-screen bg-navy-800">
      <div className="md:flex">
        <div className="flex flex-col">
          <div
            className="flex justify-between p-4 h-[450px]  bg-cover  max-h-screen "
            style={{ backgroundImage: `url(${dashgroup})` }}
          >
            <div className="bg-navy-500 text-lightPrimary bg-opacity-40 p-2 w-1/4 h-1/4 shadow-md rounded-md mb-4">
              <h2 className="text-xl font-bold mb-2">Location and Time</h2>
              <div>
                <p className=" mb-1">Location: {currentLocation}</p>
                <p className=" mb-1">Time: {currentTime}</p>
              </div>
            </div>
            <div className="bg-navy-500 text-lightPrimary flex flex-col  p-2 shadow-md rounded-md mb-4 h-1/2 w-1/3 bg-opacity-30">
              <h2 className="text-xl font-bold mb-2">My Logs</h2>
              <ul className="list-disc  text-md">
                {logs.map((log) => (
                  <li key={log.id} className=" mb-2">
                    {log.title} - {log.date}
                  </li>
                ))}
              </ul>
            </div>
           
          </div>
          <div className="md:flex gap-4 mt-30">
            <div className="bg-gradient-to-r from-blue-100 to-purple-100 p-4 shadow-md rounded-md mb-4">
              <h2 className="text-2xl font-bold mb-4 text-blue-900">Bulletin Board</h2>
              <ul className="list-none">
                {bulletinItems.map((item) => (
                  <li key={item.id} className="mb-4">
                    <h3 className="text-lg font-bold  text-blue-900">{item.title}</h3>
                    <p className="text-gray-600 mb-1">Date: {item.date}</p>
                    <p className="text-gray-800">{item.description}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-r from-blue-100 to-purple-100 md:w-1/3 p-4 shadow-md rounded-md mb-4">
              <Calendar />
            </div>
            <div>
            <div>
              <Notifications notifications={notifications} />
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeDash;
