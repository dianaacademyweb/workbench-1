import React, { useState, useEffect } from "react";
import Navbar from "../../components/navbar/index";
import { useParams } from "react-router-dom";
import DashApi from "../../dashboard/auth";
import { useNavigate } from "react-router-dom";
import Card from "../../components/card";

import { IMAGE_API } from "../../config/constant";

const Employepage = () => {
  const navigate = useNavigate();
  const [employees, setEmployees] = useState([]);
  const [profileImage, setProfileImage] = useState(null);

  const [error, setError] = useState([]);

  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    // Fetch the image URL or path from the API
    const fetchProfileImage = async () => {
      try {
        const response = await DashApi.employeimage(id);
        setProfileImage(response.data[0]);
        console.log(response); // Assuming `message` contains the image URL
        if (response.data && response.data.success === true) {
          return setError(response.data.msg);
        }
      } catch (err) {
        console.log(err);
        if (err.response) {
          return setError(err.response.data.msg);
        }
        return setError("There has been an error.");
      }
    };

    fetchProfileImage();
  }, []);

  useEffect(() => {
    const Employedata = async (event) => {
      if (event) {
        event.preventDefault();
      }
      try {
        let response = await DashApi.Employedata(id);
        console.log(response);
        setEmployees(response.data.tasks);

        if (response.data && response.data.success === true) {
          return setError(response.data.msg);
        }
      } catch (err) {
        console.log(err);
        if (err.response) {
          return setError(err.response.data.msg);
        }
        return setError("There has been an error.");
      }
    };

    Employedata();
  }, []);

  const DeleteEmploye = async () => {
    try {
      let response = await DashApi.Deleteemploye(id);
      console.log(response);
      setError("Employee deleted successfully");
      return navigate("/employee");
    } catch (error) {
      setError("Error in deleting the employee");
      console.error("Error in deleting the employee", error);
    }
  };

  return (
    <div className="min-h-screen dark:bg-navy-900">
      <Navbar />
      <div className="  flex  justify-center h-[200px] w-[200px] items-center rounded-full border-[4px] border-white dark:!border-navy-700">
        {profileImage && (
          <div className="flex justify-center" key={profileImage.id}>
            <img
              className="rounded-[100px] w-48 h-48 flex "
              src={`${IMAGE_API}/${profileImage.image}`}
              alt="Profile Image"
            />
          </div>
        )}
      </div>

      <div className="m-4 bg-white dark:bg-navy-800  p-4 flex rounded-3xl flex-col">
        <p className="text-2xl text-lightPrimary text-center font-bold mb-4">Employees Details</p>

        <Card extra="mx-4">
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            {employees.length > 0 && (
              <table className="table-auto w-full">
                <thead className="border-2">
                  <tr>
                    <th className="border-2 py-2 px-2  text-lightPrimary">
                      ID
                    </th>
                    <th className="border-2 py-2 px-2  text-lightPrimary">
                      Username
                    </th>
                    <th className="border-2 py-2 px-2  text-lightPrimary">
                      Password
                    </th>
                    <th className="border-2 py-2 px-2  text-lightPrimary">
                      Email
                    </th>
                    <th className="border-2 py-2 px-2  text-lightPrimary">
                      Gender
                    </th>
                    <th className="border-2 py-2 px-2  text-lightPrimary">
                      Contact
                    </th>
                  </tr>
                </thead>
                <tbody className="border-2">
                  {employees.map((task, index) => (
                    <tr key={index} className="border-2 text-lightPrimary">
                      <td className="border-2 py-2 px-2">{task.id}</td>
                      <td className="border-2 py-2 px-2">{task.username}</td>
                      <td className="border-2 py-2 px-2">{task.password}</td>
                      <td className="border-2 py-2 px-2">{task.email}</td>
                      <td className="border-2 py-2 px-2">{task.gender}</td>
                      <td className="border-2 py-2 px-2">{task.contact}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </Card>
<div className="flex flex-col justify-center items-center gap-2">
        <p className="mt-4 text-xl text-lightPrimary font-semibold">Delete the Employee</p>
        <button
          className="w-1/6 py-2 bg-red-600 rounded-3xl text-lightPrimary "
          onClick={DeleteEmploye}
        >
          Delete
        </button>
        {error && <p className="text-red-600  mt-2">{error}</p>}
      </div>
    </div>
    </div>
  );
};

export default Employepage;
