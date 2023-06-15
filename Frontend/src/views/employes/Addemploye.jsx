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
   
   <div>

    <div className='flex justify-end'>
    </div>
     <div className="max-w-md mx-auto mt-20">
      <h1 className="text-2xl font-bold mb-4">Employee Form</h1>
      <form action='POST '>
        <div className="mb-4">
          <label htmlFor="e_name">Name:</label>
          <input
            type="text"
            id="e_name"
            name="e_name"
            value={e_name}
            onChange={(event) => {
              setName(event.target.value);
              setError(undefined);}
            }
            className="border border-gray-300 p-2 rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="e_email">Email:</label>
          <input
            type="email"
            id="e_email"
            name="e_email"
            value={e_email}
            onChange={(event) => {
              setEmail(event.target.value);
              setError(undefined);}
            }
            className="border border-gray-300 p-2 rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="e_password">Password:</label>
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
        <div className="mb-4">
          <label htmlFor="e_gender">Gender:</label>
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
        <div className="mb-4">
          <label htmlFor="e_contact">Contact:</label>
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
            className="border border-gray-300 p-2 rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="e_address">Address:</label>
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
          <h1 className='text-green-500'>{error}</h1>
        </div>
        <button
          type="submit" 
          onClick={Add}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
        >
          Submit
        </button>
      </form>
    </div>
   </div>
  );
};

export default Addemploye;

