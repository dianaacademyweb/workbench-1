import React, { useState } from 'react';

const PerformancePage = () => {
  const [showForm, setShowForm] = useState(false);
  const [quarterData, setQuarterData] = useState({
    Q1: null,
    Q2: null,
    Q3: null,
    Q4: null,
  });

  const [performanceRatings, setPerformanceRatings] = useState({
    communicationSkills: 0,
    teamCollaboration: 0,
    // Add other performance areas here
  });

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  const handleQuarterClick = (quarter) => {
    setShowForm(false); // Close the form
    // Check if data for the selected quarter exists and display it
    if (quarterData[quarter]) {
      alert(`Data for ${quarter}: ${JSON.stringify(quarterData[quarter])}`);
    } else {
      alert(`No data available for ${quarter}`);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    const formData = new FormData(e.target);
    const formValues = {};
    formData.forEach((value, key) => {
      formValues[key] = value;
    });
    // Store form data in the corresponding quarter slot
    setQuarterData({
      ...quarterData,
      [formValues.Quarter]: formValues,
    });
    setShowForm(false); // Close the form after submission
  };

  const handleRatingChange = (performanceArea, rating) => {
    // Update the performance rating for the specified area
    setPerformanceRatings({
      ...performanceRatings,
      [performanceArea]: rating,
    });
  };
  return (
    <div>
      <div className="bg-gray-200 p-4 flex flex-col justify-center text-center min-h-screen">
        <h1 className="text-4xl font-semibold uppercase text-white mb-4">My Performance</h1>
        <div className="flex justify-around items-center space-x-4">
          {/* Container for circles */}
          <div className='flex flex-col items-center'>
          <button
  className={`uppercase font-bold rounded px-2 py-2 m-4 bg-lightPrimary relative`}
  onClick={toggleForm}
>
  Submit your quarterly audit/Appraisal form
  <span className="absolute inset-0 border-t-2 border-r-2 border-b-2 border-l-2  border-yellow-500 rounded"></span>
</button>
            <div className="grid grid-cols-2 grid-rows-2 gap-4 text-2xl">
              <div className="w-[150px] h-[150px] bg-blue-500 rounded-full flex items-center justify-center text-lightPrimary cursor-pointer transform scale-100 transition-transform duration-300 hover:scale-110" onClick={() => handleQuarterClick('Q1')}>
                Q1
              </div>
              
              <div className="w-[150px] h-[150px] bg-green-500 rounded-full  flex items-center justify-center text-lightPrimary cursor-pointer transform scale-100 transition-transform duration-300 hover:scale-110" onClick={() => handleQuarterClick('Q2')}>
                Q2
              </div>
              <div className="w-[150px] h-[150px] bg-yellow-500 rounded-full   flex items-center justify-center text-lightPrimary cursor-pointer transform scale-100 transition-transform duration-300 hover:scale-110" onClick={() => handleQuarterClick('Q3')}>
                Q3
              </div>
              <div className="w-[150px] h-[150px] bg-red-500 rounded-full   flex items-center justify-center text-lightPrimary cursor-pointer transform scale-100 transition-transform duration-300 hover:scale-110" onClick={() => handleQuarterClick('Q4')}>
                Q4
              </div>
            </div>
          </div>
          {/* Container for pie chart (dummy pie chart) */}
          <div className="flex items-center justify-center">
            <div className=" bg-white rounded-full">
              {/* Dummy Pie Chart */}
              <svg width="100%" height="100%" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="40" fill="#f0f0f0" />
                <path d="M50 50 L50 10 A40 40 0 0 1 90 50 Z" fill="#0073e6" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Form */}
      {showForm && (
        <div className="bg-opacity-75 overflow-y-auto backdrop-blur-md fixed inset-0 flex items-center justify-center">
          <div className="bg-gray-200 rounded-lg p-8 w-2/3">
            <h2 className="text-2xl font-semibold mb-4">Performance Evaluation Form</h2>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-4">
                {/* Employee Information */}
                <div className="mb-4">
                  <label htmlFor="fullName">Full Name:</label>
                  <input type="text" id="fullName" className="border rounded p-2 w-full" />
                </div>
                <div className="mb-4">
                  <label htmlFor="employeeID">Employee ID:</label>
                  <input type="text" id="employeeID" className="border rounded p-2 w-full" />
                </div>
                <div className="mb-4">
                  <label htmlFor="department">Department:</label>
                  <select id="department" className="border rounded p-2 w-full">
                    <option value="department1">Department 1</option>
                    <option value="department2">Department 2</option>
                    {/* Add more department options */}
                  </select>
                </div>
                <div className="mb-4">
                  <label htmlFor="managerName">Supervisor/Manager Name:</label>
                  <input type="text" id="managerName" className="border rounded p-2 w-full" />
                </div>

                {/* Quarterly Period */}
                <div className="mb-4">
                  <label>Select the Quarter:</label>
                  <select id="Quarter" name="Quarter" className="border rounded p-2 w-full">
                    <option value="Q1">Q1</option>
                    <option value="Q2">Q2</option>
                    <option value="Q3">Q3</option>
                    <option value="Q4">Q4</option>
                  </select>
                </div>
                <div className="mb-4">
                  <label htmlFor="year">Year:</label>
                  <input type="text" id="year" className="border rounded p-2 w-full" />
                </div>

                {/* Performance Evaluation */}
                <div className="mb-2 ">
                  <p>Please rate your performance for the quarter on a scale of 1 to 5  in the following areas:</p>
                  <div className='flex gap-6'>
                  <div>
                    <label htmlFor="communicationSkills">Communication Skills:</label>
                    <div className="flex items-center">
                  {[1, 2, 3, 4, 5].map((rating) => (
                    <span
                      key={rating}
                      className={`text-xl ml-1 cursor-pointer ${
                        performanceRatings.communicationSkills >= rating
                          ? 'text-yellow-500'
                          : 'text-gray-500'
                      }`}
                      onClick={() => handleRatingChange('communicationSkills', rating)}
                    >
                      ★
                    </span>
                  ))}
                </div>
                  </div>
                  <div>
                    <label htmlFor="teamCollaboration">Team Collaboration:</label>
                    <div className="flex items-center">
                  {[1, 2, 3, 4, 5].map((rating) => (
                    <span
                      key={rating}
                      className={`text-xl ml-1 cursor-pointer ${
                        performanceRatings.teamCollaboration >= rating
                          ? 'text-yellow-500'
                          : 'text-gray-500'
                      }`}
                      onClick={() => handleRatingChange('teamCollaboration', rating)}
                    >
                      ★
                    </span>
                  ))}
                </div>
                </div>
                  </div>
                  {/* Add other performance evaluation fields */}
                </div>
              </div>

              {/* Quarterly Achievements, Challenges, Goals, etc. */}
              <div className="mb-4">
                <label htmlFor="quarterlyAchievements">Quarterly Achievements:</label>
                <textarea id="quarterlyAchievements" className="border rounded p-2 w-full"></textarea>
              </div>
              {/* Add other textareas for Challenges, Goals, etc. */}
              
              {/* Attachments */}
              <div className="mb-4">
                <label>Attachments:</label>
                <input type="file" multiple />
              </div>

              {/* Submission Confirmation */}
              <div className="mb-4">
                <label>
                  <input type="checkbox" required /> I confirm that the information provided above is accurate and complete.
                </label>
              </div>

              <div className="text-center">
                <button type="button" onClick={toggleForm} className="bg-gray-300 text-gray-700 px-4 py-2 rounded-full mr-4">
                  Cancel
                </button>
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-full">
                  Submit Form
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default PerformancePage;
 