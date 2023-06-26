import React, { useState } from 'react';

const EmployeeForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [gender, setGender] = useState('');
  const [contact, setContact] = useState('');
  const [address, setAddress] = useState('');
  const [employeeList, setEmployeeList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Create a new employee object
    const newEmployee = {
      name,
      email,
      password,
      gender,
      contact,
      address,
    };

    // Add the new employee to the employee list
    setEmployeeList([...employeeList, newEmployee]);

    // Reset the form fields
    setName('');
    setEmail('');
    setPassword('');
    setGender('');
    setContact('');
    setAddress('');
  };

  return (
    <div className="max-w-md mx-auto">
      <form className="mb-8" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block mb-2 font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        {/* Other form fields */}
        {/* ... */}

        <button
          type="submit"
          className="w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
        >
          Submit
        </button>
      </form>

      {employeeList.length > 0 && (
        <table className="w-full">
          <thead>
            <tr>
              <th className="px-4 py-2 font-medium text-gray-700">Name</th>
              <th className="px-4 py-2 font-medium text-gray-700">Email</th>
              <th className="px-4 py-2 font-medium text-gray-700">Gender</th>
              <th className="px-4 py-2 font-medium text-gray-700">Contact</th>
              <th className="px-4 py-2 font-medium text-gray-700">Address</th>
            </tr>
          </thead>
          <tbody>
            {employeeList.map((employee, index) => (
              <tr key={index}>
                <td className="px-4 py-2">{employee.name}</td>
                <td className="px-4 py-2">{employee.email}</td>
                <td className="px-4 py-2">{employee.gender}</td>
                <td className="px-4 py-2">{employee.contact}</td>
                <td className="px-4 py-2">{employee.address}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default EmployeeForm;
