import React, { useState } from "react";
import {useAuth} from "../../context/AuthContext";

function Login_page() {
  const [registrationType, setRegistrationType] = useState("employee");
  return (
    <div className=" px-36 py-8 bg-gray-200 h-fit mt-32 ">
      <div className=" grid grid-cols-2 justify-center  bg-primary gap-4  h-[500px] shadow-2xl rounded-2xl ">
        <div className=" mt-8 justify-center text-white grid grid-cols-1 grid-flow-row ">
          <h1 className="text-3xl flex  justify-center pt-8 ">workwarden</h1>

          <div className=" h-[300px] grid grid-flow-row grid-cols-1 gap-1 bg-gray-600 shadow-md rounded py-8 px-8 mx-3 my-8">
            <div className=" flex  justify-center mt-8 mb-8  ">
              <button
                onClick={() => setRegistrationType("employee")}
                className=" bg-gray-500 hover:bg-gray-700 text-white font-bold w-32 h-16 rounded"
              >
                Login as Company
              </button>
            </div>
            <div className="flex justify-center">
              <button
                onClick={() => setRegistrationType("companyOwner")}
                className=" bg-gray-500 hover:bg-gray-700 text-white font-bold rounded w-32 h-16"
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
            <div className="px-8 ">
              <form >
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  for="username"
                ></label>
                <input
                  type="text"
                  name="username"
                  placeholder="Enter username"
                  className=" text-black shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
                />
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  for="password"
                ></label>
                <input
                  type="password"
                  name="password"
                  placeholder="enter the password"
                  className="text-black shadow appearance-none border border-red-500 rounded w-full py-2 px-3  mb-3 leading-tight focus:outline-none focus:shadow-outline"
                />
                <p className="text-white text-xs italic py-2">
                  Please choose a password.
                </p>
                <input
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                />
                <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800 float-right mr-8">
                  Forgot Password?
                </a>
                <p className=" py-5 px-5 flex justify-center items-center">
                  {" "}
                  Not a user ?{" "}
                  <span className="flex">
                    {" "}
                    <a href="" className="text-white text-lg">
                      {" "}
                      create acount{" "}
                    </a>
                  </span>
                </p>
                {/* <div className="mb-4"></span> 
                
                  Username
                </label>
                <input
                  type="text"
                 
                  id="username"
                  name = "username"
                  placeholder="Username"
                />
              </div>
              <div className="mb-6">
                
                  Password
                </label>
                <input
                  className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  type="password"
                  placeholder="******************"
                  name="password"
                />
               
              </div>
              <div className="flex items-center justify-between">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"                >
                  Sign In as company Owner
                </button>
                
              </div> */}
              </form>
              <p className="text-center text-gray-500 text-xs"></p>
            </div>
          </div>
        )}
        {registrationType === "companyOwner" && (
          <div className=" grid grid-cols-1 grid-flow-row justify-center text-white pt-8 ">
            <h1 className="text-3xl flex justify-center pt-8 ">
              Employe login
            </h1>
            <div className="px-8 ">
              <form>
                {/* <label
                  className="block text-gray-700 text-sm font-bold mb-2"
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
                  className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                  href="#"
                >
                  Forgot Password?
                </a>
              </div> */}
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Login_page;
