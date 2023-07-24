import React, { useState } from "react";
import SetTop from "./SetTop";
import { FiCheckCircle } from "react-icons/fi";

const General = () => {
  const handleEnableClick = () => {
    console.log("Enable button clicked");
    // Add your enable logic here
  };
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    const inputVal = event.target.value;
    // Allow only numbers (including decimal point if needed)
    if (/^\d*\.?\d*$/.test(inputVal)) {
      setInputValue(inputVal);
    }
  };

  return (
    <div>
      <SetTop />
      <div className="flex mx-4 my-4 rounded-3xl justify-between bg-white dark:bg-navy-900 dark:border-white dark:border">
        <h1 className="text-2xl py-6 px-4 text-black dark:text-white dark:bg-navy-900 rounded-3xl">
          GENERAL (GLOBAL)
        </h1>
      </div>
      <div className="bg-white m-4 min-h-screen dark:text-white dark:bg-navy-900 rounded-3xl">
        <div className="flex">
          <div className="flex gap-4">
            <div className="flex p-5 gap-3">
              <h1>CAPTURE SCREENSHOTS</h1>
              <a
                href="#"
                onClick={handleEnableClick}
                className="text-green-300 hover:bg-green-700 hover:text-white  rounded-md text-sm font-medium"
              >
                <FiCheckCircle className="inline-block" />
                Enabled
              </a>
            </div>
            <div className="flex p-5 gap-3">
              <h1>INTILLEGENT SCREENSHOTS</h1>
              <a
                href="#"
                onClick={handleEnableClick}
                className="text-green-300 hover:bg-green-700 hover:text-white  rounded-md text-sm font-medium"
              >
                <FiCheckCircle className="inline-block" />
                Enabled
              </a>
            </div>
          </div>
        </div>
        <div className="flex p-5 gap-3">
          <h1>IDLE TRACKING</h1>
          <a
            href="#"
            onClick={handleEnableClick}
            className="text-green-300 hover:bg-green-700 hover:text-white  rounded-md text-sm font-medium"
          >
            <FiCheckCircle className="inline-block" />
            Enabled
          </a>
        </div>
        <div className="flex gap-3 m-4">
          <p>LOG AS IDLE IF NO ACTIVITY/INPUTS FOR MORE THAN</p>
          <input type="text" value={inputValue} onChange={handleInputChange} className="w-10 border border-gray-800 rounded"/>
          <p>mins</p>
        </div>
        <div className="flex gap-3 m-4">
          <p>EMAIL ALERT TO COMPANY ADMIN & MANAGERS</p>
          <a
            href="#"
            onClick={handleEnableClick}
            className="text-green-300 hover:bg-green-700 hover:text-white  rounded-md text-sm font-medium"
          >
            <FiCheckCircle className="inline-block" />
            Enabled
          </a>
        </div>
        <div className="flex gap-3 m-4">
          <p>APP TRACKING</p>
          <a
            href="#"
            onClick={handleEnableClick}
            className="text-green-300 hover:bg-green-700 hover:text-white  rounded-md text-sm font-medium"
          >
            <FiCheckCircle className="inline-block" />
            Enabled
          </a>
        </div>
      </div>
    </div>
  );
};

export default General;
