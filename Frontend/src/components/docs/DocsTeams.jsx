import React from 'react';
import home from '/src/assets/Images/layouts/home.jpg'
import { Link } from 'react-router-dom';
import teams from '../../assets/Images/layouts/teams.png'
import teams2 from "../../assets/Images/layouts/teams2.png";
const sections = [
  {
    title: 'Managing Teams',
    content: [
      'Efficiently oversee your organization\'s teams with the Teams section.',
      'This section enables you to both create new teams and manage existing ones, fostering collaboration and organization.',
    ],
    image: `${teams}`,
  },
  {
    title: 'Creating a New Team',
    content: [
      'To initiate the process of forming a new team, access the "Add Team" option within the Teams section.',
      'Upon selection, a dedicated form will emerge, providing the means to furnish essential team information.',
      'By meticulously completing the form, you can establish a new team, assigning members and defining its purpose.',
    ],
    image: `${teams2}`,
  },
];


const DocsTeams = () => {
  return (
<div className="bg-cover min-h-screen" style={{ backgroundImage: `url(${home})` }}>
  <div className="flex justify-between p-4">
    <Link to="/docsemployees">
      <button className="px-4 py-2 bg-gray-400 rounded-md">Employees</button>
    </Link>
    <Link to="/docstasks">
      <button className="px-4 py-2 bg-gray-400 rounded-md">Tasks</button>
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

export default DocsTeams;
