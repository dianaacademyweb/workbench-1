import React, {useState} from 'react'
import { Navigate } from 'react-router-dom';
import { Link } from "react-router-dom";

function Register() {
  // const [agreement, setAgremment] = useState(true);
  const [firstName, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(undefined);
  // const [buttonText, setButtonText] = useState("Sign up");
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
      <form action="POST">
      <label htmlFor="Username"></label>
      <input  placeholder='Name' type="text" name='username' onChange={(event) => {
                  setName(event.target.value);
                  setError(undefined);
                }} />
                <label htmlFor=""></label>
                <label htmlFor="Email"></label>
      <input  placeholder='Email' type="Email" name='username' onChange={(event) => {
                  setEmail(event.target.value);
                  setError(undefined);
                }} />
                <label htmlFor=""></label>
                <label htmlFor="Username"></label>
      <input  placeholder='password' type="Password" name='username' onChange={(event) => {
                  setPassword(event.target.value);
                  setError(undefined);
                }} />
                <button  type= "submit"onClick={register}></button>
      this is the registreation page
      
      </form>
    </div>
  )
}

export default Register
