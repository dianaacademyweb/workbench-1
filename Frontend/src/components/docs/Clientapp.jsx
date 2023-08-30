import React from 'react';
import { Link } from 'react-router-dom';
import home from '/src/assets/Images/layouts/home.jpg'
import login from "../../assets/Images/layouts/login.png";
import start from "../../assets/Images/layouts/start.png";
import breaks from "../../assets/Images/layouts/break.png";
import logout from "../../assets/Images/layouts/logout.png";
import report from "../../assets/Images/layouts/report.png";
const sections = [
  {
    title: 'Login',
    content: [
      'To access the system, enter your designated login credentials provided by the company.',
    ],
    image: `${login}`,
  },
  {
    title: 'Starting Work',
    content: [
      'After successful login, initiate your work session by clicking on the "Start Work" icon.',
      'This action marks the beginning of your monitored work period.',
    ],
    image: `${start}`,
  },
  {
    title: 'Taking Break',
    content: [
      'When its time for a break, simply click the "Take a Break" button.',
      'This will transition your status to break time, temporarily halting the timer.',
    ],
    image: `${breaks}`,
  },
  {
    title: 'Logout',
    content: [
      'At the end of your work session, click the "Stop Work" icon to log out.',
      'This action concludes the timer and opens the End Report section.',
    ],
    image: `${logout}`,
  },
  {
    title: 'End-of-Day Report',
    content: [
      'In this phase, provide a comprehensive report detailing your working hours and accomplishments.',
      'Craft a detailed summary of your tasks and progress, and finalize it by clicking "Submit".',
    ],
    image: `${report}`,
  },
];

  // Add more sections...


const ClientApp = () => {
  return (
    <div className="bg-cover min-h-screen" style={{ backgroundImage: `url(${home})` }}>
    <div className="flex justify-between p-4">
      <Link to="/installation">
        <button className="px-4 py-2 bg-gray-400 rounded-md">Installation</button>
      </Link>
      <Link to="/docsdashboard">
        <button className="px-4 py-2 bg-gray-400 rounded-md">Dashboard</button>
      </Link>
    </div>
    <div className="p-4 w-full text-lightPrimary">
      {sections.map((section, index) => (
        <section key={index} className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">{section.title}</h2>
          <ul className="list-disc pl-6">
            {section.content.map((item, itemIndex) => (
              <li key={itemIndex} className="mb-2">{item}</li>
            ))}
          </ul>
          <img src={section.image} alt={section.title} className="my-4 w-2/3 mx-auto" />
        </section>
      ))}
    </div>
  </div>
  
  );
};

export default ClientApp;
