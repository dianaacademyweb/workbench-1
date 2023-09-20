import React, { useState } from "react";
import { db } from "../dianaconnect/firebaseConfig"; // Initialize Firebase Firestore here
import { collection, addDoc, query, where, getDocs } from "firebase/firestore";
import PerformanceDataPopup from "./PerformanceDataPopup";
const PerformancePage = () => {
  // Retrieve name and ID from local storage

  const [showForm, setShowForm] = useState(false);
  const [quarterData, setQuarterData] = useState(null);

  const [performanceRatings, setPerformanceRatings] = useState({
    communicationSkills: 0,
    teamCollaboration: 0,
    // Add other performance areas here
  });

  // Retrieve name and ID from local storage
  const userName = localStorage.getItem("name");
  const userId = localStorage.getItem("id");

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  const handleQuarterClick = async (quarter) => {
    setShowForm(false); // Close the form

    try {
      const performanceCollection = collection(db, "performanceData");
      const querySnapshot = await getDocs(
        query(performanceCollection, where("Quarter", "==", quarter))
      );

      if (!querySnapshot.empty) {
        const quarterData = querySnapshot.docs[0].data(); // Assuming there is only one matching document
        setQuarterData(quarterData); // Set the quarterData state
      } else {
        alert(`No data available for ${quarter}`);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      alert("An error occurred while fetching data.");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Access form elements directly by their IDs
    const fullName = document.getElementById("fullName").value;
    const employeeID = document.getElementById("employeeID").value;
    const department = document.getElementById("department").value;
    const managerName = document.getElementById("managerName").value;
    const Quarter = document.getElementById("Quarter").value;
    const year = document.getElementById("year").value;
    const quarterlyAchievements = document.getElementById(
      "quarterlyAchievements"
    ).value;
    const { communicationSkills, teamCollaboration } = performanceRatings;

    // Construct the form data object
    const formData = {
      fullName,
      employeeID,
      department,
      managerName,
      Quarter,
      year,
      quarterlyAchievements,
      communicationSkills, // Add communicationSkills rating
      teamCollaboration,

      // Add other form fields here
    };

    // Include name and ID from local storage
    formData.userName = userName;
    formData.userId = userId;

    // Store form data in the Firestore collection
    // await db.collection('performanceData').add(formData);
    const messagesRef = collection(db, "performanceData");
    await addDoc(messagesRef, formData);

    setShowForm(false); // Close the form after submission

    // Send email logic (you need to implement this)
    // You can use a server or Firebase Cloud Functions to send the email.
    // Example: sendEmail(formData.email, 'Form Submission', 'Thank you for submitting the form.');

    // Update the quarterData state to reflect the submitted data
    setQuarterData({
      ...quarterData,
      [formData.Quarter]: formData,
    });
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
        <h1 className="text-4xl font-semibold uppercase text-white mb-4">
          My Performance
        </h1>
        <div className="flex justify-around items-center space-x-4">
          {/* Container for circles */}
          <div className="flex flex-col items-center">
            <button
              className={`uppercase font-bold rounded px-2 py-2 m-4 bg-lightPrimary relative`}
              onClick={toggleForm}
            >
              Submit your quarterly audit/Appraisal form
              <span className="absolute inset-0 border-t-2 border-r-2 border-b-2 border-l-2  border-yellow-500 rounded"></span>
            </button>
            <div className="grid grid-cols-2 grid-rows-2 gap-4 text-2xl">
              <div
                className="w-[150px] h-[150px] bg-blue-500 rounded-full flex items-center justify-center text-lightPrimary cursor-pointer transform scale-100 transition-transform duration-300 hover:scale-110"
                onClick={() => handleQuarterClick("Q1")}
              >
                Q1
              </div>

              <div
                className="w-[150px] h-[150px] bg-green-500 rounded-full  flex items-center justify-center text-lightPrimary cursor-pointer transform scale-100 transition-transform duration-300 hover:scale-110"
                onClick={() => handleQuarterClick("Q2")}
              >
                Q2
              </div>
              <div
                className="w-[150px] h-[150px] bg-yellow-500 rounded-full   flex items-center justify-center text-lightPrimary cursor-pointer transform scale-100 transition-transform duration-300 hover:scale-110"
                onClick={() => handleQuarterClick("Q3")}
              >
                Q3
              </div>
              <div
                className="w-[150px] h-[150px] bg-red-500 rounded-full   flex items-center justify-center text-lightPrimary cursor-pointer transform scale-100 transition-transform duration-300 hover:scale-110"
                onClick={() => handleQuarterClick("Q4")}
              >
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
      {quarterData && (
        <PerformanceDataPopup quarterData={quarterData} onClose={() => setQuarterData(null)} />
      )}

      {/* Form */}
      {showForm && (
        <div className="bg-opacity-75 overflow-y-auto backdrop-blur-md fixed inset-0 flex items-center justify-center">
          <div className="bg-gray-200 rounded-lg p-8 w-2/3">
            <h2 className="text-2xl font-semibold mb-4">
              Performance Evaluation Form
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-4">
                {/* Employee Information */}
                <div className="mb-4">
                  <label htmlFor="fullName">Full Name:</label>
                  <input
                    type="text"
                    id="fullName"
                    className="border rounded p-2 w-full"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="employeeID">Employee ID:</label>
                  <input
                    type="text"
                    id="employeeID"
                    className="border rounded p-2 w-full"
                  />
                </div>
              

<div className="mb-4">
  <label htmlFor="department">Department:</label>
  <select id="department" className="border rounded p-2 w-full">
    <optgroup label="Product Development and Innovation">
      <option value="Product Development and Innovation">Product Development and Innovation</option>

    </optgroup>
    <optgroup label="Content Creation and Curriculum Development">
      <option value="Content Creation and Curriculum Development">Content Creation and Curriculum Development</option>
     
    </optgroup>
    <optgroup label="Sales and Marketing">
      <option value="Sales Strategy and Customer Acquisition">Sales Strategy and Customer Acquisition</option>
      <option value="Digital Marketing">Digital Marketing</option>
      <option value="Brand Management(SEO and Social Media)">Brand Management(SEO and Social Media)</option>
    </optgroup>
   
   
    
    <optgroup label="Customer Support and Success">
      <option value="Customer Support and Success">Customer Support and Success</option>

    </optgroup>
    <optgroup label="Technology and IT Services">
      <option value="Technology and IT Services">Technology and IT Services</option>
     
    </optgroup>
    <optgroup label="Research and Development (R&D)">
      <option value="Research and Development (R&D)">Research and Development (R&D)</option>
    </optgroup>
    <optgroup label="Educational Services and Training">
      <option value="Educational Services and Training">Educational Services and Training</option>
    
    </optgroup>
    <optgroup label="Data Analytics and Insights">
      <option value="Data Analytics and Insights">Data Analytics and Insights</option>
    
    </optgroup>
    <optgroup label="Finance and Accounting">
      <option value="Finance and Accounting">Finance and Accounting</option>

    </optgroup>
    <optgroup label="Legal and Compliance">
      <option value="Legal and Compliance">Legal and Compliance</option>
    
    </optgroup>
    <optgroup label="Human Resources (HR) and Talent Management">
      <option value="Human Resources (HR) and Talent Management">Human Resources (HR) and Talent Management</option>
     
    </optgroup>
    <optgroup label="Quality Assurance and Testing">
      <option value="Quality Assurance and Testing">Quality Assurance and Testing</option>
   
    </optgroup>
    <optgroup label="Business Development and Partnerships">
      <option value="Business Development and Partnerships">Business Development and Partnerships</option>
  
    </optgroup>
    <optgroup label="User Experience (UX) and Design">
      <option value="User Experience (UX) and Design">User Experience (UX) and Design</option>

    </optgroup>
    <optgroup label="International Expansion and Operations">
      <option value="International Expansion and Operations">International Expansion and Operations</option>
   
    </optgroup>
    <optgroup label="Marketing Analytics and Research">
      <option value="Marketing Analytics and Research">Marketing Analytics and Research</option>
     
    </optgroup>
    <optgroup label="Accessibility and Inclusion">
      <option value="Accessibility and Inclusion">Accessibility and Inclusion</option>
     
    </optgroup>
    <optgroup label="Corporate Social Responsibility (CSR) and Education Outreach">
      <option value="Educational Philanthropy and Impact">Educational Philanthropy and Impact</option>
      <option value="Cultural and Linguistic Adaptation">Cultural and Linguistic Adaptation</option>
      <option value="Sustainability and Eco-Educational Initiatives">Sustainability and Eco-Educational Initiatives</option>
      <option value="Exclusive EdTech Events and Retreats">Exclusive EdTech Events and Retreats</option>
    </optgroup>
   
  
    <optgroup label="Content Localization and Translation">
      <option value="Content Localization and Translation">Content Localization and Translation</option>
  
    </optgroup>
  </select>
</div>


                <div className="mb-4">
                  <label htmlFor="managerName">Supervisor/Manager Name:</label>
                  <input
                    type="text"
                    id="managerName"
                    className="border rounded p-2 w-full"
                  />
                </div>

                {/* Quarterly Period */}
                <div className="mb-4">
                  <label>Select the Quarter:</label>
                  <select
                    id="Quarter"
                    name="Quarter"
                    className="border rounded p-2 w-full"
                  >
                    <option value="Q1">Q1</option>
                    <option value="Q2">Q2</option>
                    <option value="Q3">Q3</option>
                    <option value="Q4">Q4</option>
                  </select>
                </div>
                <div className="mb-4">
                  <label htmlFor="year">Year:</label>
                  <input
                    type="text"
                    id="year"
                    className="border rounded p-2 w-full"
                  />
                </div>

                {/* Performance Evaluation */}
                <div className="mb-2 ">
                  <p>
                    Please rate your performance for the quarter on a scale of 1
                    to 5 in the following areas:
                  </p>
                  <div className="flex gap-6">
                    <div>
                      <label htmlFor="communicationSkills">
                        Communication Skills:
                      </label>
                      <div className="flex items-center">
                        {[1, 2, 3, 4, 5].map((rating) => (
                          <span
                            key={rating}
                            className={`text-xl ml-1 cursor-pointer ${
                              performanceRatings.communicationSkills >= rating
                                ? "text-yellow-500"
                                : "text-gray-500"
                            }`}
                            onClick={() =>
                              handleRatingChange("communicationSkills", rating)
                            }
                          >
                            ★
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <label htmlFor="teamCollaboration">
                        Team Collaboration:
                      </label>
                      <div className="flex items-center">
                        {[1, 2, 3, 4, 5].map((rating) => (
                          <span
                            key={rating}
                            className={`text-xl ml-1 cursor-pointer ${
                              performanceRatings.teamCollaboration >= rating
                                ? "text-yellow-500"
                                : "text-gray-500"
                            }`}
                            onClick={() =>
                              handleRatingChange("teamCollaboration", rating)
                            }
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
                <label htmlFor="quarterlyAchievements">
                  Quarterly Achievements:
                </label>
                <textarea
                  id="quarterlyAchievements"
                  className="border rounded p-2 w-full"
                ></textarea>
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
                  <input type="checkbox" required /> I confirm that the
                  information provided above is accurate and complete.
                </label>
              </div>

              <div className="text-center">
                <button
                  type="button"
                  onClick={toggleForm}
                  className="bg-gray-300 text-gray-700 px-4 py-2 rounded-full mr-4"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded-full"
                >
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
