import React from "react";
import DashApi from "../../dashboard/auth";
import { useState, useEffect } from "react";
import Card from "../../components/card/index";

const UserActivity = (props) => {
  const [activiti, setActivity] = useState([]);
  let employeid = props.employeid;
    
  console.log(employeid)

  const getActivity = async () => {
    try {
      const response = await DashApi.activities(employeid);
      console.log(response);
      if (response.data) {
        setActivity(response.data);
      } else {
        console.log("Error retrieving activities:", response.data.msg);
      }
    } catch (error) {
      console.error("Error retrieving activities:", error);
    }
  };

  
  useEffect(() => {
    // Call the API initially
    getActivity();

    // Call the API every 2 seconds
    const intervalId = setInterval(() => {
      getActivity();
    }, 4000); // 2 seconds in milliseconds

    // Clear the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, [employeid]);

  return (
    <div>
      <Card extra=" mx-1 mt-5">
        <div className="py-14 px-8">
          {activiti.length > 0 ? ( // Check if activiti has data before rendering the table
            <table className="table-auto w-full">
              <thead className="border-2">
                <tr>
                  <th className="border-2 py-2 px-2 justify-center bg-navy-800 text-white">
                    screen count no
                  </th>
                  <th className="border-2 py-2 px-2 justify-center bg-navy-800 text-white">
                    {" "}
                    screen name
                  </th>
                </tr>
              </thead>
              <tbody className="border-2 ">
                {activiti.map((task, index) => (
                  <tr key={index} className="border-2 justify-center">
                    <td className="border-2 py-2 px-2 justify-center bg-navy-800 text-white">
                      {task.screen_count}
                    </td>
                    <td className="border-2 py-2 px-2 justify-center bg-navy-800 text-white">
                      {task.screen_name}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>No activities to display.</p>
          )}
        </div>
      </Card>
    </div>
  );
};

export default UserActivity;
