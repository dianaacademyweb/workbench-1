import React, { useState } from "react";
import SetTop from "./SetTop";

const EmailDigest = () => {
  const [enabled, setEnabled] = useState(false);
  const [radio, setRadio] = useState(false);
  return (
    <div>
      <SetTop />
      <div className="flex mx-4 my-4 rounded-3xl justify-between bg-white dark:bg-navy-900 dark:border-white dark:border">
        <h1 className="text-2xl py-6 px-4 text-black dark:text-white dark:bg-navy-900 rounded-3xl">
          EMAIL DIGEST
        </h1>
        <div className="relative flex flex-col dark:text-white dark:bg-navy-900 items-center justify-center  overflow-hidden">
          <div className="flex">
            <label class="inline-flex relative items-center mr-5 cursor-pointer">
              <input
                type="checkbox"
                className="sr-only peer"
                checked={enabled}
                readOnly
              />
              <div
                onClick={() => {
                  setEnabled(!enabled);
                }}
                className="w-11 h-6 bg-gray-200 rounded-full peer  peer-focus:ring-green-300  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"
              ></div>
              <span className="ml-2 text-sm font-medium text-gray-900">
                Enable email digest
              </span>
            </label>
          </div>
        </div>
      </div>
      <div className="bg-white m-4 p-4 rounded-3xl max-h-screen flex flex-col">
        <h1 className="font-bold text-lg">COMPANY</h1>
        <p className="pb-4">
          Get Company wide report on employee activities, dormant employees and
          more.
        </p>
        <div className="flex flex-col gap-6">
        <div className="flex p-5 items-center mx-24 justify-around shadow">
          <div className="flex">
            <input type="radio" />
            <span className="font-bold">DAILY</span>
            <p className="pl-10 flex text-right text-gray-700">
              Get report every day
            </p>
          </div>
        </div>
        <div className="flex p-5 items-center mx-24 justify-around shadow">
          <div className="flex">
            <input type="radio" />
            <span className="font-bold">WEEKLY</span>
            <p className="pl-10 flex text-right text-gray-700">
              Get report every WEEK
            </p>
          </div>
        </div>
        </div>
      </div>
      <div className="bg-white m-4 p-4 rounded-3xl max-h-screen flex flex-col mb-4">
        <h1 className="font-bold text-lg">MANAGER</h1>
        <p className="pb-4">
          Get associated team wide report on employee's activities dormant employees and more.
        </p>
        <div className="flex p-5 items-center mx-24 justify-around shadow">
          <div className="flex">
            <input type="radio" />
            <span className="font-bold">DAILY</span>
            <p className="pl-10 flex text-right text-gray-700">
              Get report every day
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailDigest;
