import React, { useState } from "react";
import { Link } from "react-router-dom";
import AuthApi from "../auth/auth";
import { useNavigate } from "react-router-dom";
import InputField from "./fields/InputField";
import FixedPlugin from "./fixedPlugin/FixedPlugin";
import Authimage from "../assets/Images/loginimage/logobg.png";

function Register() {
  const navigate = useNavigate();
  // const [agreement, setAgremment] = useState(true);
  const [firstName, setName] = useState("");
  const [email, setEmail] = useState("");
  const [user_type, setUser] = useState("organization");
  const [password, setPassword] = useState("");
  const [is_active, setActive] = useState("true");

  const [error, setError] = useState(undefined);
  const [buttonText, setButtonText] = useState("Sign up");
  const register = async (event) => {
    if (event) {
      event.preventDefault();
    }
    if (firstName === "") {
      return setError("You must enter your username.");
    }
    if (email === "") {
      return setError("You must enter your email.");
    }
    if (user_type === "") {
      return setError("You must enter user_type.");
    }
    if (password === "") {
      return setError("You must enter a password.");
    }
    try {
      setButtonText("Signing up");
      let response = await AuthApi.Register({
        username: firstName,
        email,
        user_type,
        password,
        is_active,
      });
      console.log(response);
      if (response.data && response.data.success === true) {
        setButtonText("Signing  up");
        setError(response.data.msg);
        return navigate("/login");
      }
    } catch (err) {
      setButtonText("Sign up");
      if (err.response) {
        return setError(err.response.data.msg);
      }
      console.log(err);
      return setError("There has been an error.");
    }
  };
  return (
    <div className=" md:px-36 md:py-8  h-fit  !bg-lightPrimary dark:!bg-navy-900 ">
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
            <p className="ml-3 text-sm text-navy-800">Back to Dashboard</p>
          </div>
        </Link>
      </div>
      <div className="md:mt-18 md:mb-16 flex h-full w-full items-center justify-center px-2 md:mx-0 md:px-0 lg:mb-10 lg:items-center lg:justify-start">
        {/* Sign in section */}
        <div className=" w-full max-w-full flex-col items-center md:pl-4 lg:pl-0 xl:max-w-[420px]">
          <h4 className="mb-2.5 text-xl md:text-4xl font-bold text-navy-700 dark:text-white">
            👋 Register here
          </h4>
          <p className="md:mb-9 md:ml-1 text-base text-navy-800">
            Enter your email and password to register
          </p>

          {/* Email */}
          <form method="submit">
            <InputField
              onChange={(event) => {
                setName(event.target.value);
                setError(undefined);
              }}
              variant="auth"
              name="password"
              extra="mb-3"
              label="Username*"
              placeholder="Min. 8 characters"
              id="usernmae"
              type="text"
              value={firstName}
              autoComplete="current-password"
            />
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
              autoComplete="passoword"
              name="password"
              variant="auth"
              extra="mb-3"
              label="password*"
              placeholder="mail@simmmple.com"
              id="password"
              type="password"
              value={password}
            />

            {/* Checkbox */}
            <button
              type="Submit"
              onClick={register}
              className="linear mt-2 w-full rounded-xl bg-brand-500 py-[12px] text-base font-medium text-lightPrimary transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200"
            >
              {buttonText}
            </button>
          </form>

          <h1 className="text-black">{error}</h1>

          <div className="mt-4">
            <span className=" text-sm font-medium text-navy-700 dark:text-navy-800">
              Already have an account
            </span>

            <Link
              className=" flex float-right ml-1 text-sm font-medium text-brand-500 hover:text-brand-600 dark:text-white"
              to="/login"
            >
              Login Here
            </Link>
          </div>
       
        </div>
       

        <div className="relative float-right h-full min-h-screen w-full !bg-lightPrimary dark:!bg-navy-900 ">
          <FixedPlugin />
        </div>
        
        <div className="mt-0 absolute right-0 sm:hidden h-full min-h-screen md:block lg:w-[49vw] 2xl:w-[44vw]">
        <img
  className=" flex h-full w-full items-end justify-center bg-cover bg-center  xl:rounded-bl-[200px]"
  style={{ backgroundImage: `url(${Authimage})` }}
/>
        </div>
      </div>
     
    </div>

    // <div className='mt-28'>

    //   <h1 className=' text-3xl flex justify-center align-center'>Register here</h1>
    //   <form action="POST">
    //   <label htmlFor="Username"> Username</label>
    //   <input className='block text-black shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline'  placeholder='Name' type="text" name='firstname' value={firstName} onChange={(event) => {
    //               setName(event.target.value);
    //               setError(undefined);
    //             }} />
    //             <label htmlFor="">Email</label>
    //   <input className='shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline block'  placeholder='Enter your username' type="username" name='username'value={email} onChange={(event) => {
    //               setEmail(event.target.value);
    //               setError(undefined);
    //             }} />
    //               <label htmlFor="">User Type</label>
    //   <input className='shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline block'  placeholder='chose as organization and employe' type="text" name='organisation'value={user_type} onChange={(event) => {
    //               setUser(event.target.value);
    //               setError(undefined);
    //             }} />
    //                 <label htmlFor="">password</label>
    //   <input className='shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline block'  placeholder='Enter your password' type="password" name='password'value={password} onChange={(event) => {
    //               setPassword(event.target.value);
    //               setError(undefined);
    //             }} />
    //             <h1>{error}</h1>

    //             <button className='flex mt-10 '  type= "submit"onClick={register}> {buttonText}</button>

    //   <p className='flex px-1 py-5' >Already have an acount  <Link to = "/login"><button className='rounded bg-primary text-white px-2 py-2 mx-10'>Signin</button></Link></p>

    //   </form>
    // </div>
  );
}

export default Register;
