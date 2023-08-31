import React from 'react';
import home from '/src/assets/Images/layouts/home.jpg'
import { Link } from 'react-router-dom';
import dashboard from "../../assets/Images/layouts/dashboard.png";
import select from "../../assets/Images/layouts/select.png";
import main from "../../assets/Images/layouts/main.png";
import main2 from "../../assets/Images/layouts/main2.png";
const sections = [
  {
    title: 'Dashboard Overview',
    content: [
      'Welcome to the DianaSentinel Dashboard, your central control hub.',
      "This dashboard provides administrators with a comprehensive overview of the system.",
    ],
    image: `${dashboard}`,
  },
  {
    title: 'Select an Employee',
    content: [
      'During the application setup phase,',
      'install the application by unzipping the downloaded package.',
     
    ],
    image: `${select}`,
  },
  {
    title: 'Recent Activity Monitoring',
    content: [
      'This crucial section offers a real-time glimpse into user activities.',
      'Screenshots are presented alongside tab counts and names for detailed insight.',
    ],
    image: `${main}`,
  },
  {
    title: 'Idle Time and Task Management',
    content: [
      'Clicking on an employees profile reveals their idle time statistics.',
      'Additionally, explore the "Tasks" section to view assigned tasks and progress.',
     
    ],
    image: `${main2}`,
  },
];


const DocsDashboard = () => {
  return (
<div className="bg-cover min-h-screen" style={{ backgroundImage: `url(${home})` }}>
  <div className="flex justify-between p-4">
    <Link to="/docsclientapp">
      <button className="px-4 py-2 bg-gray-400 rounded-md">Client app</button>
    </Link>
    <Link to="/docsreports">
      <button className="px-4 py-2 bg-gray-400 rounded-md">Reports</button>
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

export default DocsDashboard;
