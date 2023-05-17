import React, { useState } from 'react';

const ProfilePage = () => {
  const [email, setEmail] = useState('example@example.com');
  const [name, setName] = useState('John Doe');
  const [contact, setContact] = useState('123-456-7890');
  const [website, setWebsite] = useState('www.example.com');
  const [address, setAddress] = useState('123 ABC Street, City');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Update profile details
    // You can make an API call here to save the updated information
  };

  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Profile</h2>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
          Email
        </label>
        <p>{email}</p>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
          Name
        </label>
        <p>{name}</p>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="contact">
          Contact
        </label>
        <p>{contact}</p>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="website">
          Website URL
        </label>
        <p>{website}</p>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="address">
          Address
        </label>
        <p>{address}</p>
      </div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => alert('Edit profile clicked')}
      >
        Edit Profile
      </button>
    </div>
  );
};
export default ProfilePage;