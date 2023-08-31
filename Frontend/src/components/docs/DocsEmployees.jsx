import React from 'react';
import home from '/src/assets/Images/layouts/home.jpg'
import { Link } from 'react-router-dom';
import employees from "../../assets/Images/layouts/employees.png";
import employeeform from "../../assets/Images/layouts/employeeform.png";
const sections = [
  {
    title: 'Managing Employees',
    content: [
      'Efficiently manage your workforce with the Employees section.',
      'This section empowers you to create new employees and manage existing profiles.',
    ],
    image: `${employees}`,
  },
  {
    title: 'Adding a New Employee',
    content: [
      'Initiate the process of adding a new employee by selecting the "Add Employee" option.',
      'Upon clicking, a dedicated form will open to collect the necessary information for the new profile.',
      'By accurately filling out the form, you can seamlessly create a new employee entry.',
    ],
    image: `${employeeform}`,
  },
];


const DocsEmployees = () => {
  return (
<div className="bg-cover min-h-screen" style={{ backgroundImage: `url(${home})` }}>
  <div className="flex justify-between p-4">
    <Link to="/docsreports">
      <button className="px-4 py-2 bg-gray-400 rounded-md">Reports</button>
    </Link>
    <Link to="/docsteams">
      <button className="px-4 py-2 bg-gray-400 rounded-md">Teams</button>
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

export default DocsEmployees;
