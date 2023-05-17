import React, {useState} from 'react'
import { Navigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import AuthApi from "../auth/auth";

function Register() {
  // const [agreement, setAgremment] = useState(true);
  const [firstName, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(undefined);
  const [buttonText, setButtonText] = useState("Sign up");
  const register = async (event) => {
    if (event) {
      event.preventDefault();
    }
    if (firstName === "") {
      return setError("You must enter your first name.");
    }
    if (email === "") {
      return setError("You must enter your email.");
    }
    if (password === "") {
      return setError("You must enter a password.");
    }
    try {
      setButtonText("Signing up");
      let response = await AuthApi.Register({
        username: firstName,
        email,
        password,
      });
      if (response.data && response.data.success === false) {
        setButtonText("Sign up");
        return setError(response.data.msg);
      }
      return Navigate("/login");
    } catch (err) {
      console.log(err);
      setButtonText("Sign up");
      if (err.response) {
        return setError(err.response.data.msg);
      }
      return setError("There has been an error.");
    }
  };
  return (
    <div className='mt-28'>
      
      <h1 className=' text-3xl flex justify-center align-center'>Register here</h1>
      <form action="POST">
      <label htmlFor="Username"> Username</label>
      <input className='block text-black shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline'  placeholder='Name' type="text" name='firstname' value={firstName} onChange={(event) => {
                  setName(event.target.value);
                  setError(undefined);
                }} />
                <label htmlFor="">Email</label>
                <label htmlFor="Email"></label>
      <input className='shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline block'  placeholder='Enter your email' type="Email" name='email'value={email} onChange={(event) => {
                  setEmail(event.target.value);
                  setError(undefined);
                }} />
                <label htmlFor="">Password</label>
                <label htmlFor="Username"></label>
      <input  className='shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline block' placeholder=' Enter your password' type="Password" name='password' value={password} onChange={(event) => {
                  setPassword(event.target.value);
                  setError(undefined);
                }} />
                <h1>{error}</h1>

                <button className='flex mt-10 '  type= "submit"onClick={register}> {buttonText}</button>
   
      <p className='flex px-1 py-5' >Already have an acount  <Link to = "/login"><button className='rounded bg-primary text-white px-2 py-2 mx-10'>Signin</button></Link></p>
      
      </form>
    </div>
  )
}

export default Register
