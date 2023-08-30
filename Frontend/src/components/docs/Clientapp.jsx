import React from 'react';
import { Link } from 'react-router-dom';
import home from '/src/assets/Images/layouts/home.jpg'
const sections = [


  {
    title: 'Login',
    content: [
      'In this section you have to enter the login details provided by the ccompany',
      
     
    ],
    image: '/src/assets/Images/login.png',
  },
  {
    title: 'Staring',
    content: [
      'After login you have to click on the start login icon to start the timmer',
      'So this will be recorded as the login time and your work starts to be monitoring',
     
    ],
    image: '/src/assets/Images/start.png',
  },
  {
    title: 'Break',
    content: [
      'You can take a break by clicking the work button that will switch to break time',
      'so when u click on the work button you switch to break the timmer will be stopped',
     
    ],
    image: '/src/assets/Images/break.png',
  },
  {
    title: 'LogOut',
    content: [
      'To logout you have to click on the stop login icon ',
      'after clicking on the icon the timmer stops and a end report will be opened',
     
    ],
    image: '/src/assets/Images/logout.png',
  },
  {
    title: 'End Report',
    content: [
      'This is the section where you have to write the total report of the working hours',
      'After writing the complete detailed report submit it by clicking the submit button',
     
    ],
    image: '/src/assets/Images/report.png',
  },
  // Add more sections...
];

const ClientApp = () => {
  return (
    <div className="bg-cover min-h-screen" style={{ backgroundImage: `url(${home})` }}>
      <div className='flex justify-between'>
        <Link to="/installation"><button className='px-2 py-1 bg-gray-400 rounded-md'>Installation</button></Link>
        <Link to="/docsdashboard"><button className='px-2 py-1 bg-gray-400 rounded-md'>Docs Dashboard</button></Link>
      </div>
    <div className="p-4 w-full text-lightPrimary text-center">
      {sections.map((section, index) => (
        <section key={index} className="mb-8">
          <h2 className="text-2xl font-bold mb-2">{section.title}</h2>
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

export default ClientApp;
