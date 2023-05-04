import React, { useState } from "react";

function Login_page() {
  const [registrationType, setRegistrationType] = useState("employee");
  return (
    <div className=" px-36 py-8 bg-gray-200 h-fit ">
      <div className=" grid grid-cols-2 justify-center  bg-primary gap-4  h-[500px] shadow-2xl rounded-2xl ">
      <div className=" mt-8 justify-center text-white grid grid-cols-1 grid-flow-row ">
        <h1 className="text-3xl flex  justify-center pt-8 ">workwarden</h1>

        <div className=" h-[300px] grid grid-flow-row grid-cols-1 gap-5 bg-gray-600 shadow-md rounded py-8 px-8 mx-5 my-5">
          <div className=" flex  justify-center  ">
            <button
              onClick={() => setRegistrationType("employee")}
              className=" bg-gray-500 hover:bg-gray-700 text-white font-bold  px-4 rounded"
            >
              Login as Company
            </button>
          </div>
          <div className="flex justify-center ">
            <button
              onClick={() => setRegistrationType("manager")}
              className=" bg-gray-500  hover:bg-gray-700 text-white font-bold  px-4 rounded"
            >
              Login as Manager
            </button>
          </div>
          <div className="flex justify-center">
            <button
              onClick={() => setRegistrationType("companyOwner")}
              className=" bg-gray-500 hover:bg-gray-700 text-white font-bold  px-4 rounded"
            >
              Login as Employe
            </button>
          </div>
        </div>
      </div>
      {/* login form page  */}

      {registrationType === "employee" && (
        <div className=" grid grid-cols-1 grid-flow-row justify-center text-white pt-8 py-8 ">
          <h1 className="text-3xl flex justify-center pt-8">Company login</h1>
          <div class="px-8 ">
            <form>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  for="username"
                >
                  Username
                </label>
                <input
                  type="text"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="username"
                  placeholder="Username"
                />
              </div>
              <div className="mb-6">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  for="password"
                >
                  Password
                </label>
                <input
                  classNameName="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  type="password"
                  placeholder="******************"
                />
                <p className="text-red-500 text-xs italic">
                  Please choose a password.
                </p>
              </div>
              <div className="flex items-center justify-between">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                >
                  Sign In as company Owner
                </button>
                <a
                  class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                  href="#"
                >
                  Forgot Password?
                </a>
              </div>
            </form>
            <p class="text-center text-gray-500 text-xs"></p>
          </div>
        </div>
      )}
       {registrationType === "manager" && (
        <div className=" grid grid-cols-1 grid-flow-row justify-center text-white pt-8 py-8  px-8">
          <h1 className="text-3xl flex justify-center pt-8">Manager login</h1>
          <div class="px-8 ">
            <form>
            <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  for="username"
                >
                  Company code 
                </label>
                <input
                  type="text"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="username"
                  placeholder="Zxc05 "
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  for="username"
                >
                  Username
                </label>
                <input
                  type="text"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="username"
                  placeholder="Username"
                />
              </div>
              <div className="mb-6">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  for="password"
                >
                  Password
                </label>
                <input
                  classNameName="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  type="password"
                  placeholder="******************"
                />
                <p className="text-red-500 text-xs italic">
                  Please choose a password.
                </p>
              </div>
              <div className="flex items-center justify-between">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                >
                  Sign In as companyOwner
                </button>
                <a
                  class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                  href="#"
                >
                  Forgot Password?
                </a>
              </div>
            </form>
            <p class="text-center text-gray-500 text-xs"></p>
          </div>
        </div>
      )}
      {registrationType === "companyOwner" && (
        <div className=" grid grid-cols-1 grid-flow-row justify-center text-white pt-8 ">
          <h1 className="text-3xl flex justify-center pt-8 ">Employe login</h1>
          <div class="px-8 ">
            <form>
            <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  for="username"
                >
                  Company code 
                </label>
                <input
                  type="text"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="username"
                  placeholder="Zxc05 "
                />
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  for="username"
                >
                  Username
                </label>
                <input
                  type="text"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="username"
                  placeholder="Username"
                />
              </div>
              <div className="mb-6">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  for="password"
                >
                  Password
                </label>
                <input
                  classNameName="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  type="password"
                  placeholder="******************"
                />
                <p className="text-red-500 text-xs italic">
                  Please choose a password.
                </p>
              </div>
              <div className="flex items-center justify-between">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                >
                  Sign In as emplyee
                </button>
                <a
                  class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                  href="#"
                >
                  Forgot Password?
                </a>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
    </div>
  );
}

export default Login_page;
