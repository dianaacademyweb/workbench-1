import React from 'react';
import TopNav from './TopNav';
import LeftNav from './LeftNav';
import home from '/src/assets/Images/layouts/home.jpg'
function Hr(){
  const cardData = [
    { image: '/src/assets/Images/layouts/pro.jpg', name: 'John Doe', designation: 'HR Manager' },
    { image: '/src/assets/Images/layouts/pro.jpg', name: 'Jane Smith', designation: 'Recrutier' },
    { image: '/src/assets/Images/layouts/pro.jpg', name: 'Alex Johnson', designation:'Employee Relations' },
    { image: '/src/assets/Images/layouts/pro.jpg', name: 'Sarah Thompson', designation: 'Payroll Executive' },
    { image: '/src/assets/Images/layouts/pro.jpg', name: 'Michael Brown', designation: 'R and D Executive' },
    { image: '/src/assets/Images/layouts/pro.jpg', name: 'Michael Brown', designation: 'Compliance Officer' }
  ];
  return (
    <div className="bg-cover " style={{ backgroundImage: `url(${home})` }}>
      <TopNav/>
      <div className='flex'>
      <LeftNav/>
      <div className=" mx-auto">
      <div className="grid grid-cols-5 grid-rows-2 gap-4">
        <div className="card col-start-3 bg-white flex flex-col items-center justify-center rounded shadow">
          <img src={cardData[0].image} alt="Profile" className=" w-32 h-32 rounded-full mb-4 "  />
          <h3 className='text-xl font-semibold mb-2'>{cardData[0].name}</h3>
          <p className="text-gray-600">{cardData[0].designation}</p>
        </div>
        <div className="card  row-start-2 bg-white flex flex-col items-center justify-center rounded shadow">
          <img src={cardData[1].image} alt="Profile" className=" w-32 h-32 rounded-full mb-4 "  />
          <h3 className='text-xl font-semibold mb-2'>{cardData[1].name}</h3>
          <p className="text-gray-600">{cardData[1].designation}</p>
        </div>
        
        <div className="card row-start-2 bg-white flex flex-col items-center justify-center rounded shadow">
          <img src={cardData[2].image} alt="Profile" className=" w-32 h-32 rounded-full mb-4 "  />
          <h3 className='text-xl font-semibold mb-2'>{cardData[2].name}</h3>
          <p className="text-gray-600">{cardData[2].designation}</p>
        </div>
        <div className="card  row-start-2 bg-white flex flex-col items-center justify-center rounded shadow">
          <img src={cardData[3].image} alt="Profile" className=" w-32 h-32 rounded-full mb-4 "  />
          <h3 className='text-xl font-semibold mb-2'>{cardData[3].name}</h3>
          <p className="text-gray-600">{cardData[3].designation}</p>
        </div>
        <div className="card  row-start-2 bg-white flex flex-col items-center justify-center rounded shadow">
          <img src={cardData[4].image} alt="Profile" className=" w-32 h-32 rounded-full mb-4 "  />
          <h3 className='text-xl font-semibold mb-2'>{cardData[4].name}</h3>
          <p className="text-gray-600">{cardData[4].designation}</p>
          </div>
        <div className="card  row-start-2 bg-white flex flex-col items-center justify-center rounded shadow">
          <img src={cardData[5].image} alt="Profile" className=" w-32 h-32 rounded-full mb-4 "  />
          <h3 className='text-xl font-semibold mb-2'>{cardData[5].name}</h3>
          <p className="text-gray-600">{cardData[5].designation}</p>
          </div>
        </div>
      </div>
      </div>
    </div>
    
  );
};

export default Hr;
