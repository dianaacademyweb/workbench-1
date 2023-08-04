import React from "react";
import DashApi from "../../dashboard/auth";
import { useState, useEffect } from "react";
import Card from "../../components/card/index";

const   UserActivity = (props) => {
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
    <div className="mt-4">
      <Card extra="  h-full dark:bg-[#4f4f504d] ">
          <h1 className=" mt-2 text-lightPrimary font-bold text-xl text-center">USER ACTIVITY</h1>
        <div className="py-4 px-8 ">
          {activiti.length > 0 ? ( // Check if activiti has data before rendering the table
            <table className="table-auto w-full rounded-lg ">
              <thead className="border-2 border-navy-600 ">
                <tr className="rounded-lg">
                  <th className="border-2 rounded-lg border-navy-600 py-2 px-2 justify-center dark:text-darktext dark:bg-navy-800 bg-lightPrimary text-white">
                    screen count no
                  </th>
                  <th className="border-2 border-navy-600 py-2 px-2 justify-center bg-lightPrimary text-white dark:bg-navy-800 dark:text-darktext">
                    {" "}
                    screen name
                  </th>
                </tr>
              </thead>
              <tbody className="border-2 ">
                {activiti.map((task, index) => (
                  <tr key={index} className="border-2 border-navy-600 justify-center">
                    <td className="border-2 py-2 px-2  border-navy-600 justify-center dark:text-darktext dark:bg-navy-800 bg-lightPrimary text-white">
                      {task.screen_count}
                    </td>
                    <td className="border-2 py-2 px-2 border-navy-600  justify-center dark:text-darktext dark:bg-navy-800 bg-lightPrimary text-white">
                      {task.screen_name}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p className="text-lightPrimary">No activities to display.</p>
          )}
        </div>
      </Card>
    </div>
  );
};

export default UserActivity;
