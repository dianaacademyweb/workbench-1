import React from 'react';
import home from '/src/assets/Images/layouts/home.jpg'
import { Link } from 'react-router-dom';

const sections = [
  {
    title: 'Tasks section',
    content: [
      'In this section we can manage all the tasks created',
      'so we can create a new task and manage existing tasks'
     
    ],
    image: '/src/assets/Images/tasks1.png',
  },
  {
    title: 'Tasks table',
    content: [
      'All the created tasks were shown here',
      'with every detail we filled and submitted the form is shown here',
     
    ],
    image: '/src/assets/Images/tasks2.png',
  },
  {
    title: 'Creating Task',
    content: [
      'Here when we click on the add task in the tasks section this form opens up',
      'By filling up the data we can create a new tasks.',
     
    ],
    image: '/src/assets/Images/tasks3.png',
  },
  {
    title: '',
    content: [
      ''
     
    ],
    image: '/src/assets/Images/tasks4.png',
  },
];

const DocsTasks = () => {
  return (
    <div className="bg-cover  min-h-screen" style={{ backgroundImage: `url(${home})` }}>
      <div className="flex justify-between">
        <Link to="/docsteams">
          <button className="px-2 py-1 bg-gray-400 rounded-md">Teams</button>
        </Link>
        <Link to="/dashboard">
          <button className="px-2 py-1 bg-gray-400 rounded-md">
            Home
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

export default DocsTasks;
