import React, { useState } from "react";
import logo from "../../assets/Images/loginimage/logo.png";
import AuthApi from "../../auth/auth";
import { useAuth } from "../../context/AuthContext";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import jwtDecode from "jwt-decode";
// import backgroundimage from '../../assets/Images/loginimage/back.jpg'
// import sideimage from '../../assets/Images/loginimage/lg.jpg'

function Newloginpage() {
  const navigate = useNavigate();
  let { user } = useAuth;
  const { setUser } = useAuth();
  const { setId } = useAuth();
  const { setToken } = useAuth();
  const {setType} = useAuth()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(undefined);
  const [buttonText, setButtonText] = useState("Sign in");
  const [selectedUser, setSelectedUser] = useState("admin");
  const [rememberMe, setRememberMe] = useState(false);
  const [showLoginInterface, setShowLoginInterface] = useState(false);
  const login = async (event) => {
    if (event) {
      event.preventDefault();
    }
    if (user && id ) {
      return navigate("/dashboard");
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
      if (response.data && response.data.success === true) {
        return setError(response.data.msg);
      }
      console.log(response);
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
    console.log(response);
    let user = { ...response.data.user };
    var token = response.data.access;
    var decode = jwtDecode(token);
    console.log(decode.type);
    let id = decode.user_id;
    let usertype = decode.type;
    user = JSON.stringify(usertype);
    
    localStorage.setItem("id", id);
    localStorage.setItem("token", token);
    localStorage.setItem("usertype", user);


    setUser(user);
    setId(id);
    setToken(token);
    setType(user);
    return navigate("/dashboard");
  };
  const handleUserSelection = (userType) => {
    setSelectedUser(userType);
    setShowLoginInterface(true);
  };

  const handleRememberMeChange = () => {
    setRememberMe(!rememberMe);
  };
  return (
    <div className="container">
      <div className="user-selection-box">
        <div>
          <div className="logo-container">
            <img src={logo} alt="Logo" className="logo" />
          </div>

          <button className="btn" onClick={() => handleUserSelection("admin")}>
            Admin
          </button>
          <button
            className="btn"
            onClick={() => handleUserSelection("manager")}
          >
            Manager
          </button>
          <button
            className="btn"
            onClick={() => handleUserSelection("employee")}
          >
            Employee
          </button>
        </div>
      </div>
      <div
        className={`login-interface-box ${showLoginInterface ? "show" : ""}`}
      >
        {/* {selectedUser && (
          <div> */}
        <h2>Login as {selectedUser}</h2>
        <form>
          {selectedUser === "admin" && (
            <>
              <label htmlFor="adminUsername">Admin Email</label>
              <input
                value={email}
                type="text"
                id="adminUsername"
                onChange={(event) => {
                  setEmail(event.target.value);
                  setError(undefined);
                }}
              />

              <label htmlFor="adminPassword">Admin Password:</label>
              <input onChange={(event) => {
            setPassword(event.target.value);
            setError(undefined);
          }} type="password" value={password} id="adminPassword" />

              <div>
                <label htmlFor="rememberMe" onChange={handleRememberMeChange}>
                  <input
                    type="checkbox"
                    id="rememberMe"
                    checked={rememberMe}
                    onChange={(event) => {
                      setPassword(event.target.value);
                      setError(undefined);
                    }}
                  />
                  Remember Me
                </label>
              </div>
              <h1>{error}</h1>
              <button type="submit" onClick={login}>
                Login as Admin
              </button>
            </>
          )}

          {selectedUser === "manager" && (
            <>
              {/* Manager login form */}
              <label htmlFor="managerUsername">Manager Username:</label>
              <input type="text" id="managerUsername" />

              <label htmlFor="managerPassword">Manager Password:</label>
              <input type="password" id="managerPassword" />

              <div>
                <label htmlFor="rememberMe">
                  <input
                    type="checkbox"
                    id="rememberMe"
                    checked={rememberMe}
                    onChange={handleRememberMeChange}
                  />
                  Remember Me
                </label>
              </div>

              <button type="submit">Login as Manager</button>
            </>
          )}

          {selectedUser === "employee" && (
            <>
              {/* Employee login form */}
              <label htmlFor="employeeUsername">Employee Username:</label>
              <input type="text" id="employeeUsername" />

              <label htmlFor="employeePassword">Employee Password:</label>
              <input type="password" id="employeePassword" />

              <div>
                <label htmlFor="rememberMe">
                  <input
                    type="checkbox"
                    id="rememberMe"
                    checked={rememberMe}
                    onChange={handleRememberMeChange}
                  />
                  Remember Me
                </label>
              </div>

              <button type="submit">Login as Employee</button>
            </>
          )}
        </form>
      </div>
    </div>
    // </div>
  );
}

export default Newloginpage;
