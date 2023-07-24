import React, { useState } from "react";
import SetTop from "./SetTop";

const HolidayDefinition = () => {
  const [selectedItem, setSelectedItem] = useState("");

  const handleClick = (item) => {
    setSelectedItem(item);
  };
  return (
    <div>
      <SetTop />
      <div className="flex mx-4 my-4 rounded-3xl justify-between bg-white dark:bg-navy-900 dark:border-white dark:border">
        <h1 className="text-2xl py-6 px-4 text-black dark:text-white dark:bg-navy-900 rounded-3xl">
          HOLIDAY DEFINITION
        </h1>
      </div>
      <div className="bg-white m-4 p-4 rounded-3xl max-h-screen flex flex-col dark:bg-navy-900 dark:text-white">
        <h1 className="font-bold text-lg">WEEK-OFF</h1>
        <p className="pb-4">Setup and maintain company wide holidays.</p>
        <div className="flex flex-col gap-6">
          <div className=" p-5 items-center mx-24  shadow">
            <span className="font-bold">WEEK-OFF</span>
            <div className="w-64  bg-gray-100 p-2 mt-6 rounded shadow-lg dark:bg-navy-900 dark:text-white">
              <div className="grid grid-cols-7 gap-2 dark:bg-navy-900 dark:text-white">
                <div
                  className={`cursor-pointer p-2 text-center border ${
                    selectedItem === "sunday" ? "bg-blue-500 text-white" : ""
                  }`}
                  onClick={() => handleClick("sunday")}
                >
                  S
                </div>
                <div
                  className={`cursor-pointer p-2 text-center border ${
                    selectedItem === "monday" ? "bg-blue-500 text-white" : ""
                  }`}
                  onClick={() => handleClick("monday")}
                >
                  M
                </div>
                <div
                  className={`cursor-pointer p-2 text-center border ${
                    selectedItem === "tuesday" ? "bg-blue-500 text-white" : ""
                  }`}
                  onClick={() => handleClick("tuesday")}
                >
                  T
                </div>
                <div
                  className={`cursor-pointer p-2 text-center border ${
                    selectedItem === "wednesday" ? "bg-blue-500 text-white" : ""
                  }`}
                  onClick={() => handleClick("wednesday")}
                >
                  W
                </div>
                <div
                  className={`cursor-pointer p-2 text-center border ${
                    selectedItem === "thursday" ? "bg-blue-500 text-white" : ""
                  }`}
                  onClick={() => handleClick("thursday")}
                >
                  T
                </div>
                <div
                  className={`cursor-pointer p-2 text-center border ${
                    selectedItem === "friday" ? "bg-blue-500 text-white" : ""
                  }`}
                  onClick={() => handleClick("friday")}
                >
                  F
                </div>
                <div
                  className={`cursor-pointer p-2 text-center border ${
                    selectedItem === "saturday" ? "bg-blue-500 text-white" : ""
                  }`}
                  onClick={() => handleClick("saturday")}
                >
                  S
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex mx-4 my-4 rounded-3xl justify-between bg-white dark:bg-navy-900 dark:border-white dark:border">
        <h1 className="text-2xl font-bold py-6 px-4 text-black dark:text-white dark:bg-navy-900 rounded-3xl">
          HOLIDAYS LIST
        </h1>
        <button className="my-4 px-2 rounded-3xl bg-white border-blue-400 border mx-4 dark:text-white text-navy-900 dark:bg-navy-800 ">
          {/* <Link className='px-4 text-blue-400 dark:text-white' to="">+ Add Designation</Link> */}
          + Add Holiday
        </button>
      </div>
      <div className="flex mx-4 my-4 rounded-3xl justify-between bg-white dark:bg-navy-900 dark:text-white dark:border">
        <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div class="overflow-hidden">
              <table class="min-w-full text-left text-sm font-light">
                <thead class="border-b font-medium dark:border-neutral-500">
                  <tr>
                    <th scope="col" class="px-6 py-4">
                      DATE
                    </th>
                    <th scope="col" class="px-6 py-4">
                      DESCRIPTION
                    </th>
                    <th scope="col" class="px-6 py-4">
                      ACTIONS
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="border-b dark:border-neutral-500">
                    <td class="whitespace-nowrap px-6 py-4">date</td>
                    <td class="whitespace-nowrap px-6 py-4">description</td>
                    <td class="whitespace-nowrap px-6 py-4">edit</td>
                  </tr>
                  <tr class="border-b dark:border-neutral-500">
                    <td class="whitespace-nowrap px-6 py-4">date</td>
                    <td class="whitespace-nowrap px-6 py-4">description</td>
                    <td class="whitespace-nowrap px-6 py-4">edit</td>
                  </tr>
                  <tr class="border-b dark:border-neutral-500">
                    <td class="whitespace-nowrap px-6 py-4">date</td>
                    <td class="whitespace-nowrap px-6 py-4">description</td>
                    <td class="whitespace-nowrap px-6 py-4">edit</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HolidayDefinition;
