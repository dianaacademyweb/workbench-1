import React from 'react';
import TopNav from './TopNav';
import LeftNav from './LeftNav';
import home from '/src/assets/Images/layouts/home.jpg'
import '/src/App.jsx';

import Pro from "../../assets/Images/layouts/pro.jpg"

function Leader(){
  const cardData = [
    { image: `${Pro}`, name: 'John Doe', designation: 'FNCM' },
    { image: `${Pro}`, name: 'Jane Smith', designation: 'CEO' },
    { image: `${Pro}` , name: 'Alex Johnson', designation: 'Director' },
    { image: `${Pro}`, name: 'Sarah Thompson', designation: 'C.T.O' },
    { image: `${Pro}`, name: 'Michael Brown', designation: 'Director' }
  ];
  return (
    <div className="bg-cover " style={{ backgroundImage: `url(${home})` }}>
      <TopNav/>
      <div className='flex'>
      <LeftNav/>
      
      <div className="mx-auto">
      <div className="grid grid-cols-5 grid-rows-3 gap-4">
        <div className="card  flex flex-col items-center justify-center rounded shadow col-start-3">
          <img src={cardData[0].image} alt="Profile" className=" w-32 h-32 rounded-full mb-4" />
          <h3 className='text-xl font-semibold mb-2'>{cardData[0].name}</h3>
          <p className="text-gray-600">{cardData[0].designation}</p>
        </div>
        <div className="card   flex flex-col items-center justify-center rounded shadow col-start-3 row-start-2">
          <img src={cardData[1].image} alt="Profile" className=" w-32 h-32 rounded-full mb-4 " />
          <h3 className='text-xl font-semibold mb-2'>{cardData[1].name}</h3>
          <p className="text-gray-600">{cardData[1].designation}</p>
        </div>
        
        <div className="card   flex flex-col items-center justify-center rounded shadow col-start-2 row-start-3">
          <img src={cardData[2].image} alt="Profile" className=" w-32 h-32 rounded-full mb-4 " />
          <h3 className='text-xl font-semibold mb-2'>{cardData[2].name}</h3>
          <p className="text-gray-600">{cardData[2].designation}</p>
        </div>
        <div className="card   flex flex-col items-center justify-center rounded shadow col-start-3 row-start-3">
          <img src={cardData[3].image} alt="Profile" className=" w-32 h-32 rounded-full mb-4 " />
          <h3 className='text-xl font-semibold mb-2'>{cardData[3].name}</h3>
          <p className="text-gray-600">{cardData[3].designation}</p>
        </div>
        <div className="card   flex flex-col items-center justify-center rounded shadow col-start-4 row-start-3">
          <img src={cardData[4].image} alt="Profile" className=" w-32 h-32 rounded-full mb-4 " />
          <h3 className='text-xl font-semibold mb-2'>{cardData[4].name}</h3>
          <p className="text-gray-600">{cardData[4].designation}</p>
          </div>
        </div>
      </div>
    </div>
  
  
      </div>
  
    
    
  );
};

export default Leader;
