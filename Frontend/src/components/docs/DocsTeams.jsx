import React from 'react';
import home from '/src/assets/Images/layouts/home.jpg'
import { Link } from 'react-router-dom';

const sections = [
  {
    title: 'Teams section',
    content: [
      'In this section we can manage all the teams created',
      'so we can create a new team and manage existing teams'
     
    ],
    image: '/src/assets/Images/teams.png',
  },
  {
    title: 'Creating  Team',
    content: [
      'Here when we click on the add team in the team section this form opens up',
      'By filling up the data we can create a new team by assigning a board',
     
    ],
    image: '/src/assets/Images/teams2.png',
  },
];

const DocsTeams = () => {
  return (
    <div className="bg-cover  min-h-screen" style={{ backgroundImage: `url(${home})` }}>
      <div className="flex justify-between">
        <Link to="/docsreports">
          <button className="px-2 py-1 bg-gray-400 rounded-md">Employees</button>
        </Link>
        <Link to="/docstasks">
          <button className="px-2 py-1 bg-gray-400 rounded-md">
            Tasks
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

export default DocsTeams;
