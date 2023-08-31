import React from 'react';
import home from '/src/assets/Images/layouts/home.jpg'
import { Link } from 'react-router-dom';
import tasks1 from "../../assets/Images/layouts/tasks1.png";
import tasks2 from "../../assets/Images/layouts/tasks2.png";
import tasks3 from "../../assets/Images/layouts/tasks3.png";
import tasks4 from "../../assets/Images/layouts/tasks4.png";
const sections = [
  {
    title: 'Task Management',
    content: [
      'Efficiently handle your organization\'s tasks using the dedicated Tasks section.',
      'This section empowers you to create new tasks and effectively manage your existing task list.',
    ],
    image: `${tasks1}`,
  },
  {
    title: 'Comprehensive Tasks Table',
    content: [
      'View all created tasks in the well-organized Tasks Table.',
      'Every detail you submit through the form is meticulously displayed, offering a clear overview of your tasks.',
    ],
    image: `${tasks2}`,
  },
  {
    title: 'Creating a New Task',
    content: [
      'Initiate the process of creating a new task by selecting "Add Task" within the Tasks section.',
      'Upon selection, a user-friendly form emerges, allowing you to provide necessary task details.',
      'Complete the form diligently to seamlessly generate a new task entry.',
    ],
    image: `${tasks3}`,
  },
  {
    title: 'Task Progress Tracking',
    content: [
      'Stay updated on task progress with intuitive progress indicators.',
      'Effortlessly monitor task completion and track ongoing activities.',
    ],
    image: `${tasks4}`,
  },
];


const DocsTasks = () => {
  return (
<div className="bg-cover min-h-screen" style={{ backgroundImage: `url(${home})` }}>
  <div className="flex justify-between p-4">
    <Link to="/docsteams">
      <button className="px-4 py-2 bg-gray-400 rounded-md">Teams</button>
    </Link>
    <Link to="/dashboard">
      <button className="px-4 py-2 bg-gray-400 rounded-md">Home</button>
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

export default DocsTasks;
