import React, { useState } from "react";
import {useAuth} from "../../context/AuthContext";
import { Link } from "react-router-dom";
import AuthApi from "../../auth/auth"
import { Navigate } from "react-router-dom";

function Login_page() {
  const { setUser } = useAuth();
  const { user } = useAuth();
  const[email , setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(undefined);
  const [buttonText, setButtonText] = useState("Sign in");
  const [registrationType, setRegistrationType] = useState("employee");
  
  const login = async (event) => {
    if (event) {
      event.preventDefault();
    }
    if (user && user.token) {
      return Navigate("/dashboard");
    }
    if (email === "") {
      return setError("You must enter your email.");
    }
    if (password === "") {
      return setError("You must enter your password");
    }
    setButtonText("Signing in");
    try {
      let response = await AuthApi.Login({
        email,
        password,
      });
      if (response.data && response.data.success === false) {
        return setError(response.data.msg);
      }
      return setProfile(response);
    } catch (err) {
      console.log(err);
      setButtonText("Sign in");
      if (err.response) {
        return setError(err.response.data.msg);
      }
      return setError("There has been an error.");
    }
  };

  const setProfile = async (response) => {
    let user = { ...response.data.user };
    user.token = response.data.token;
    user = JSON.stringify(user);
    setUser(user);
    localStorage.setItem("user", user);
    return Navigate("/dashboard")

  };
  return (
    <div className=" px-36 py-8 bg-gray-200 h-fit mt-32 ">
      <div className=" grid grid-cols-2 justify-center  bg-primary gap-4  h-[500px] shadow-2xl rounded-2xl ">
        <div className=" mt-8 justify-center text-white grid grid-cols-1 grid-flow-row ">
          <h1 className="text-3xl flex  justify-center pt-8 ">workwarden</h1>

          <div className=" h-[300px] grid grid-flow-row grid-cols-1 gap-1 bg-gray-600 shadow-md rounded py-8 px-8 mx-3 my-8">
            <div className=" flex  justify-center mt-8 mb-8  ">
              <button
                onClick={() => setRegistrationType("employee")}
                className=" bg-gray-500 hover:bg-gray-700 text-white font-bold w-[200px] h-16  rounded"
              >
                Login as Company
              </button>
            </div>
            <div className="flex justify-center">
              <button
                onClick={() => setRegistrationType("companyOwner")}
                className=" bg-gray-500 hover:bg-gray-700 text-white font-bold rounded w-[200px] h-16"
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
                > Enter Your Email</label>
                <input
                   onChange={(event) => {
                  setEmail(event.target.value);
                  setError(undefined);
                   }}
                  type="text"
                  value={email}
                  name="Email"
                  placeholder="Enter username"
                  className=" text-black shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
                />
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                ></label>
                <input onChange={(event) => {
                 setPassword(event.target.value);
                 setError(undefined);
              }}
                  name = "password"
                  type="password"
                  value={password}
                  placeholder="enter the password"
                  className="text-black shadow appearance-none border border-red-500 rounded w-full py-2 px-3  mb-3 leading-tight focus:outline-none focus:shadow-outline"
                />
                <p className="text-white text-xs italic py-2">
                  Please choose a password.
                </p>
                <button type="submit" onClick={login} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                 {buttonText}
                </button>
                <h1>{error}</h1>

                
                <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800 float-right mr-8">
                  Forgot Password?
                </a>
                <p className=" py-5 px-5 flex justify-center items-center">
                  {" "}
                  Don&apos;t have an account?{" "}
                  <button className="rounded px-3 py-2 bg-white mx-5"> <Link to = "/register"> register</Link></button>
                  
                </p>
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
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Login_page;
