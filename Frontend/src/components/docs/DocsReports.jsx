import React from 'react';
import home from '/src/assets/Images/layouts/home.jpg'
import { Link } from 'react-router-dom';
import dreport from '../../assets/Images/avatars/reportsnav.png'
import topactivity from "../../assets/Images/layouts/topactivity.png";
import employeereports from "../../assets/Images/layouts/employeereports.png";
import attendancereports from "../../assets/Images/layouts/attendancereports.png";
import idletime from "../../assets/Images/layouts/idletime.png";
const sections = [
  {
    title: 'Reports Section',
    content: [
      'Access the Reports section by expanding the "Reports" dropdown in the sidebar.',
    ],
    image: `${dreport}`,
  },
  {
    title: 'Top Activity Analysis',
    content: [
      'Explore the Top Activity section to gain insights into user productivity.',
      'View detailed activity records of selected employees for comprehensive analysis.',
    ],
    image: `${topactivity}`,
  },
  {
    title: 'Employee Activity Reports',
    content: [
      'In this dedicated section, select an employee to retrieve their detailed activity snapshots.',
      'Examine employee productivity and tasks through the available screenshots.',
    ],
    image: `${employeereports}`,
  },
  {
    title: 'Attendance Reports',
    content: [
      'Access comprehensive attendance reports showcasing employee login and logout timings.',
      'Gain a comprehensive understanding of attendance patterns through detailed records.',
    ],
    image: `${attendancereports}`,
  },
  {
    title: 'Idle Time Tracking',
    content: [
      'Monitor employee idle time in this dedicated section.',
      'Employees are alerted within the app if idle for more than 16 minutes, enhancing productivity.',
    ],
    image: `${idletime}`,
  },
];


const DocsReports = () => {
  return (
    <div className="bg-cover min-h-screen" style={{ backgroundImage: `url(${home})` }}>
    <div className="flex justify-between p-4">
      <Link to="/docsdashboard">
        <button className="px-4 py-2 bg-gray-400 rounded-md">Dashboard</button>
      </Link>
      <Link to="/docsemployees">
        <button className="px-4 py-2 bg-gray-400 rounded-md">Employees</button>
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

export default DocsReports;
