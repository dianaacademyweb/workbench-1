import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { Link } from "react-router-dom";
import AuthApi from "../../auth/auth";
import { Navigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import InputField from "../fields/InputField";
import Checkbox from "../checkbox/index";
import FixedPlugin from "../../components/fixedPlugin/FixedPlugin";
import Authimage from "../../assets/Images/loginimage/Debit.png";
import { useNavigate } from "react-router-dom";
function Login_page() {
  const navigate = useNavigate();
  const { setUser } = useAuth();
  const { user } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(undefined);
  const [buttonText, setButtonText] = useState("Sign in");
  // const [registrationType, setRegistrationType] = useState("employee");


  const login = async (event) => {
    if (event) {
      event.preventDefault();
    }
    if (user && user.token) {
      return navigate('/dashboard');
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
      }
      );
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
    return navigate('/dashboard');
  };
  return (
    <div className=" px-36 py-8  h-fit  !bg-white dark:!bg-navy-900 ">
      <div className="flex float-left">
        <Link to="/dashboard" className="mt-0 w-max lg:pt-10">
          <div className="mx-auto flex h-fit w-fit items-center hover:cursor-pointer">
            <svg
              width="8"
              height="12"
              viewBox="0 0 8 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.70994 2.11997L2.82994 5.99997L6.70994 9.87997C7.09994 10.27 7.09994 10.9 6.70994 11.29C6.31994 11.68 5.68994 11.68 5.29994 11.29L0.709941 6.69997C0.319941 6.30997 0.319941 5.67997 0.709941 5.28997L5.29994 0.699971C5.68994 0.309971 6.31994 0.309971 6.70994 0.699971C7.08994 1.08997 7.09994 1.72997 6.70994 2.11997V2.11997Z"
                fill="#A3AED0"
              />
            </svg>
            <p className="ml-3 text-sm text-gray-600">Back to Dashboard</p>
          </div>
        </Link>
      </div>
      <div className="mt-18 mb-16 flex h-full w-full items-center justify-center px-2 md:mx-0 md:px-0 lg:mb-10 lg:items-center lg:justify-start">
        {/* Sign in section */}
        <div className=" w-full max-w-full flex-col items-center md:pl-4 lg:pl-0 xl:max-w-[420px]">
          <h4 className="mb-2.5 text-4xl font-bold text-navy-700 dark:text-white">
            Sign In
          </h4>
          <p className="mb-9 ml-1 text-base text-gray-600">
            Enter your email and password to sign in!
          </p>
          <div className="mb-6 flex h-[50px] w-full items-center justify-center gap-2 rounded-xl bg-lightPrimary hover:cursor-pointer dark:bg-navy-800">
            <div className="rounded-full text-xl">
              <FcGoogle />
            </div>
            <h5 className="text-sm font-medium text-navy-700 dark:text-white">
              Sign In with Google
            </h5>
          </div>
          <div className="mb-6 flex items-center  gap-3">
            <div className="h-px w-full bg-gray-200 dark:bg-navy-700" />
            <p className="text-base text-gray-600 dark:text-white"> or </p>
            <div className="h-px w-full bg-gray-200 dark:bg-navy-700" />
          </div>
          {/* Email */}
         <form method="submit">
         <InputField
           onChange={(event) => {
            setEmail(event.target.value);
            setError(undefined);
          }}
            autoComplete="mail"
            name="email"
            variant="auth"
            extra="mb-3"
            label="Email*"
            placeholder="mail@simmmple.com"
            id="Email"
            type="email"
            value={email}
          
          />


          <InputField
          onChange={(event) => {
            setPassword(event.target.value);
            setError(undefined);
          }}
            variant="auth"
            name = "password"
            extra="mb-3"
            label="Password*"
            placeholder="Min. 8 characters"
            id="password"
            type="password"
            value={password}
            autoComplete="current-password"
            
          />
         
          {/* Checkbox */}
          <div className="mb-4 flex items-center justify-between px-2">
            <div className="flex items-center">
              <Checkbox />
              <p className="ml-2 text-sm font-medium text-navy-700 dark:text-white">
                Keep me logged In
              </p>
            </div>
            <a
              className="text-sm font-medium text-brand-500 hover:text-brand-600 dark:text-white"
              href=" "
            >
              Forgot Password?
            </a>
          </div>
          <button
            type="Submit"
            onClick={login}
            className="linear mt-2 w-full rounded-xl bg-brand-500 py-[12px] text-base font-medium text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200"
          >
            {buttonText}
          </button>
          </form>
         
          <h1 className="text-black">{error}</h1>
          
          <div className="mt-4">
            <span className=" text-sm font-medium text-navy-700 dark:text-gray-600">
              Not registered yet?
            </span>
            
              
              <Link className= " flex float-right ml-1 text-sm font-medium text-brand-500 hover:text-brand-600 dark:text-white" to= "/register">Create an account</Link>
              
            
          </div>
        </div>

        <div className="relative float-right h-full min-h-screen w-full !bg-white dark:!bg-navy-900 ">
          <FixedPlugin />
        </div>
        <div className="mt-0 absolute right-0 hidden h-full min-h-screen md:block lg:w-[49vw] 2xl:w-[44vw]">
          <div
            className="absolute flex h-full w-full items-end justify-center bg-cover bg-center lg:rounded-bl-[120px] xl:rounded-bl-[200px]"
            style={{ backgroundImage: `url(${Authimage})` }}
          />
        </div>
      </div>

      {/* <div className=" grid grid-cols-2 justify-center  bg-primary gap-4  h-[500px] shadow-2xl rounded-2xl ">
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
        </div> */}
      {/* login form page  */}

      {/* {registrationType === "employee" && (
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
        )} */}
      {/* {registrationType === "companyOwner" && (
          <div className=" grid grid-cols-1 grid-flow-row justify-center text-white pt-8 ">
            <h1 className="text-3xl flex justify-center pt-8 ">
              Employe login
            </h1>
            <div className="px-8 ">
              <form>
              </form>
            </div>
          </div>
        )} */}
    </div>
  );
}

export default Login_page;
