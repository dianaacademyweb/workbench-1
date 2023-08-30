import React from 'react';
import home from '/src/assets/Images/layouts/home.jpg'
import { Link } from 'react-router-dom';
const sections = [
  {
    title: 'Dasboard',
    content: [
      'Welcome to the DianaSentinel Dashboard',
      "This is the admin's dashboard",
    ],
    image: '/src/assets/Images/dashboard.png',
  },
  {
    title: 'Select an Employee',
    content: [
      'In the setup of application',
      'install the application by unziping the downloaded',
     
    ],
    image: '/src/assets/Images/select.png',
  },
  {
    title: 'Recent Activity',
    content: [
      'In this section we can see the user activity the screenshots are visibile',
      'and the tabs count and tabs name'
      
     
    ],
    image: '/src/assets/Images/main.png',
  },
  {
    title: 'IdleTime and Tasks section',
    content: [
      'IdleTime will be shown when we click on the employee ',
      'jTasks section where assigned tasks shown',
     
    ],
    image: '/src/assets/Images/main2.png',
  },
];

const DocsDashboard = () => {
  return (
    <div className="bg-cover  min-h-screen" style={{ backgroundImage: `url(${home})` }}>
      <div className="flex justify-between">
        <Link to="/docsclientapp">
          <button className="px-2 py-1 bg-gray-400 rounded-md">Client App</button>
        </Link>
        <Link to="/docsreports">
          <button className="px-2 py-1 bg-gray-400 rounded-md">
            Reports
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

export default DocsDashboard;
