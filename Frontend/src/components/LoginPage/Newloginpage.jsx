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
  const {id} = useAuth()
  const { setUser } = useAuth();
  const { setId } = useAuth();
  const { setToken } = useAuth();
  const {setusertype} = useAuth();
  const {setType} = useAuth()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(undefined);
  const [buttonText, setButtonText] = useState("Sign in");
  const [selectedUser, setSelectedUser] = useState("admin");
  const [rememberMe, setRememberMe] = useState(false);
  const [showLoginInterface, setShowLoginInterface] = useState("admin");
  const login = async (event) => {
    if (event) {
      event.preventDefault();
    }
    if ( id  ) {
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
      console.log(response);
      if (response.data && response.status === true) {
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
    let user = { ...response.data.user };
    var token = response.data.access;
    var decode = jwtDecode(token);
    let id = decode.user_id;
    let name = decode.name;
    let usertype = decode.type;
    console.log(name);
    user = JSON.stringify(user);

    localStorage.setItem("user",user)
    localStorage.setItem("id", id);
    localStorage.setItem("token", token);
    localStorage.setItem("name", name);
    localStorage.setItem("type", usertype)


    setUser(user);
    setId(id);
    setToken(token);
    setType(name);
    setusertype(usertype);
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
   <div className="backimage">
    <div className="container ">
      <div className="user-selection-box   ">
        <div>
          <div className="logo-container">
            <img src={logo} alt="Logo" className="logo" />
          </div>

          <button className=" text-white bg-gray-700 py-2 px-2 rounded-lg" onClick={() => handleUserSelection("admin")}>
            Admin
          </button>
          <button
            className=" text-white bg-gray-700 py-2 px-2 rounded-lg" 
            onClick={() => handleUserSelection("manager")}
          >
            Manager
          </button>
          <button
            className=" text-white  bg-gray-700 py-2 px-2 rounded-lg"
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
              <label htmlFor="Email">Admin Email</label>
              <input
                value={email}
                type="text"
                name="email"
                id="admin email"
                autoComplete="email"
                onChange={(event) => {
                  setEmail(event.target.value);
                  setError(undefined);
                }}
              />

              <label htmlFor="adminPassword">Admin Password:</label>
              <input onChange={(event) => {
            setPassword(event.target.value);
            setError(undefined);
          }}
           type="password" 
           value={password} 
           id="adminPassword" 
           autoComplete="current-password"

           />

              <div>
                {/* <label htmlFor="rememberMe" onChange={handleRememberMeChange}>
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
                </label> */}
              </div>
              <h1>{error}</h1>
              <button type="submit" onClick={login}>
              {buttonText} as Admin
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
        

        <Link  to = "/forgotpassword">        <span className="flex float-right text-sm text-red-300">Forgot password</span>
</Link>

        <div className="mt-6">
            <span className=" text-sm font-medium text-navy-700 dark:text-gray-600">
              Not registered yet?
            </span>
            
              
       <Link className= " flex float-right ml-1 text-sm font-medium text-brand-500 hover:text-brand-600 dark:text-white" to= "/register">Create an account</Link>
              
            
          </div>

      </div>
    </div>
    </div>
  );
}

export default Newloginpage;
