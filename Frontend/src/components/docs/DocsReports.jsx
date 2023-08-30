import React from 'react';
import home from '/src/assets/Images/layouts/home.jpg'
import { Link } from 'react-router-dom';
const sections = [
  {
    title: 'Reports section',
    content: [
      'To view the reports section dropdown the reports in sidebar',
     
    ],
    image: '/src/assets/Images/reportsnav.png',
  },
  {
    title: 'Top Activity',
    content: [
      'This is the Top Activity section',
      'we can we the acivity of the selected employee',
     
    ],
    image: '/src/assets/Images/topactivity.png',
  },
  {
    title: 'Employee Reports',
    content: [
      'In this section when we select a particular employye we fecth the screenshots of the employee'
      
     
    ],
    image: '/src/assets/Images/employeereports.png',
  },
  {
    title: 'Attendance reports',
    content: [
      'Attendance reports show the login logout timmings of the employee'
     
    ],
    image: '/src/assets/Images/attendancereports.png',
  },
  {
    title: 'Idle Time',
    content: [
      'This section show the particular employee idle time ',
      'a employee will be notified in the app where he/she not working for 16 mins'
     
    ],
    image: '/src/assets/Images/idletime.png',
  },
];

const DocsReports = () => {
  return (
    <div className="bg-cover  min-h-screen" style={{ backgroundImage: `url(${home})` }}>
      <div className="flex justify-between">
        <Link to="/docsdashboard">
          <button className="px-2 py-1 bg-gray-400 rounded-md">Dashboard</button>
        </Link>
        <Link to="/docsemployees">
          <button className="px-2 py-1 bg-gray-400 rounded-md">
            Employees
          </button>
        </Link>
      </div>
    <div className="p-4 w-full text-lightPrimary text-center">
      {sections.map((section, index) => (
        <section key={index} className="mb-8">
          <h2 className="text-xl font-bold mb-2">{section.title}</h2>
          <ul className="list-disc ml-6">
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

export default DocsReports;
