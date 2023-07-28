import React from 'react'

const EmployeeProfile = () => {
  return (
    <div className="bg-white p-4 shadow-md rounded-md mb-4">
    <h2 className="text-xl font-bold mb-2">Employee Profile</h2>
    <div>
      <p className="text-gray-600 mb-1">Name: John Doe</p>
      <p className="text-gray-600 mb-1">Position: Software Engineer</p>
      <p className="text-gray-600 mb-1">Email: john.doe@example.com</p>
    </div>
  </div>
  )
}

export default EmployeeProfile