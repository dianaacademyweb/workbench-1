import React, { useState } from 'react';
import axios from 'axios';
import DashApi from '../../dashboard/auth';

const Addemploye = () => {
  const id = localStorage.getItem("id");
  const [organization_id, setOrgnization] = useState(id);
  const [error, setError] = useState(undefined);
  const [e_name, setName] = useState("");
  const [e_email, setEmail] = useState("");
  const [e_password, setPassword] = useState("");
  const [e_gender, setGender] = useState("");
  const [e_contact, setcontact] = useState("");
  const [e_address, setAddres] = useState("");
  

  const Add = async (e) => {
    if (e){
      e.preventDefault();
    }
    if (e_name === "") {
      return setError("You must enter your first name.");
    }
    if (e_email === "") {
      return setError("You must enter your email.");
    }
    if (e_password === "") {
      return setError("You must enter a password.");
    }
    if (e_gender === "") {
      return setError("You must enter your gender.");
    }
    if (e_contact === "") {
      return setError("You must create a contact.");
    }
    if (e_address === "") {
      return setError("You must create a addres.");
    }
    try {
      let  response = await DashApi.createEmploye({
        organization_id,
        e_name,
        e_email,
        e_password,
        e_gender,
        e_contact,
        e_address,
      });
      if (response.data && response.status === 201 ) {
        return setError("employe created succesfullly");
      }  // Replace 'API_URL' with your actual API endpoint
      console.log(response.data); // Handle the response as needed
    } catch (error) {
      if (error.response) {
        return setError(err.response.data.msg);
      }
      return setError('There has been an error.');
    }
  };

  return (
   
   <div className='flex items-center justify-center min-h-screen w-full bg-teal-200'>
    <div className=' sm:w-1/2   bg-white rounded shawdow-lg p-8 m-4 lg:m-12'>
      <h1 className="block w-full text-center text-grey-darkest mb-6 text-2xl">EMPLOYEE FORM</h1>
      <form className="mb-4 md:flex flex-col md:justify-between " action='POST '>
        <div className='flex flex-col mb-4  lg:w-full'>
          <label  htmlFor="e_name" className='mb-2 uppercase  font-bold text-lg text-grey-darkest'>Name</label>
          <input
            type="text"
            id="e_name"
            name="e_name"
            value={e_name}
            onChange={(event) => {
              setName(event.target.value);
              setError(undefined);}
            }
            className="border py-2 px-3 text-grey-darkest md:mr-2"
          />
        </div>
        <div className="flex flex-col mb-4  lg:w-full">
          <label htmlFor="e_email" className='mb-2 uppercase  font-bold text-lg text-grey-darkest'>Email</label>
          <input
            type="email"
            id="e_email"
            name="e_email"
            value={e_email}
            onChange={(event) => {
              setEmail(event.target.value);
              setError(undefined);}
            }
            className="border border-gray-300 p-2 rounded "
          />
        </div>
        <div className="flex flex-col mb-4  lg:w-full">
          <label htmlFor="e_password" className='mb-2 uppercase tracking-wide font-bold text-lg text-grey-darkest'>Password</label>
          <input
            type="password"
            id="e_password"
            name="e_password"
            value={e_password}
            onChange={(event) => {
              setPassword(event.target.value);
              setError(undefined);}
            }
            className="border border-gray-300 p-2 rounded"
          />
        </div>
        <div className="flex flex-col mb-4  lg:w-full">
          <label htmlFor="e_gender" className='mb-2 uppercase tracking-wide font-bold text-lg text-grey-darkest'>Gender</label>
          <input
            type="text"
            id="e_gender"
            name="e_gender"
            value={e_gender}
            onChange={(event) => {
              setGender(event.target.value);
              setError(undefined);}
            }
            className="border border-gray-300 p-2 rounded"
          />
        </div>
        <div className="flex flex-col mb-4  lg:w-full">
          <label htmlFor="e_contact" className='mb-2 uppercase tracking-wide font-bold text-lg text-grey-darkest'>Contact</label>
          <input
            type="text"
            id="e_contact"
            name="e_contact"
            value={e_contact}
            onChange={(event) => {
              setcontact(event.target.value);
              setError(undefined);

            }
            }
            className="border border-gray-300 p-2 rounded "
          />
        </div>
        <div className="flex flex-col mb-4  lg:w-full">
          <label htmlFor="e_address" className='mb-2 uppercase tracking-wide font-bold text-lg text-grey-darkest'>Address</label>
          <input
            type="text"
            id="e_address"
            name="e_address"
            value={e_address}
            onChange={(event) => {
              setAddres(event.target.value);
              setError(undefined);}
            
            }
            
            className="border border-gray-300 p-2 rounded"
          />
          <h1 className='text-red-500'>{error}</h1>
        </div>
        <button
          type="submit" 
          onClick={Add}
          className="bg-teal-400 hover:bg-teal-600 text-white px-4 py-2 rounded"
        >
          Submit
        </button>
      </form>
    </div>
 
   </div>
  );
};

export default Addemploye;

