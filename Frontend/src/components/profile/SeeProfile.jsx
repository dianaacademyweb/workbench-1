import React, { useState, useEffect } from 'react';
import { FiSearch } from 'react-icons/fi';
import DashApi from '../../dashboard/auth';
import ProfileImage from './ProfileImage';



function Profiledetail() {
  const[error, setError] = useState(undefined);
  const [profiles, setProfile] = useState([]);

  useEffect(() => {
    const SeeProfile = async (event) => {
      if (event) {
        event.preventDefault();
      }
      try {
        let response = await DashApi.SeeProfile();
        setProfile(response.data[0]);
        console.log(response);
        if (response.data && response.data.success === true) {
          return setError(response.data.msg);
        }
      } catch (err) {
        console.log(err);
        if (err.response) {
          return setError(err.response.data.msg);
        }
        return setError('There has been an error.');
      }
    };

    SeeProfile(); // Call the function here

  }, []); // Empty dependency array for the initial effect

  return (
    <div className="" >
       <ProfileImage/>
     
      <div className="">
          {profiles && (
            <div  key={profiles.id}>
             {/* Background and profile */}
            
       
             {/* Name and position */}
             <div className="mt-16 flex flex-col items-center">
               <h4 className="text-xl font-bold text-navy-700 dark:text-white">
               {profiles.name}
               </h4>
               <p className="text-base font-normal text-gray-600">Product Manager</p>
             </div>
       
             {/* Post followers */}
             <div className="mt-6 mb-3 flex gap-4 md:!gap-14">
               <div className="flex flex-col items-center justify-center">
                 <p className="text-2xl font-bold text-navy-700 dark:text-white">17</p>
                 <p className="text-sm font-normal text-gray-600">Manager</p>
               </div>
               <div className="flex flex-col items-center justify-center">
                 <p className="text-2xl font-bold text-navy-700 dark:text-white">
                   9.7K
                 </p>
                 <p className="text-sm font-normal text-gray-600">Professional</p>
               </div>
               <div className="flex flex-col items-center justify-center">
                 <p className="text-2xl font-bold text-navy-700 dark:text-white">
                   434
                 </p>
                 <p className="text-sm font-normal text-gray-600">Connect </p>
               </div>
             </div>
           <div className="mb-6 flex justify-center">
          <p className="text-navy-700 dark:text-white">
            <span className="font-bold">Website:</span>{profiles.website}
          </p>
          <p className="text-navy-700 dark:text-white">
            <span className="font-bold">Location:</span> {profiles.location}
          </p>
          <p className="text-navy-700 dark:text-white">
            <span className="font-bold">Contact:</span> {profiles.contact}
          </p>
          <p className="text-navy-700 dark:text-white">
            <span className="font-bold">Address:</span> {profiles.address}
          </p>
          <p className="text-navy-700 dark:text-white">
            <span className="font-bold">Gender:</span>{profiles.Gender}
          </p>
        </div>
       </div>
           
          )}
    </div>
    
    </div>
  );
}

export default Profiledetail;

