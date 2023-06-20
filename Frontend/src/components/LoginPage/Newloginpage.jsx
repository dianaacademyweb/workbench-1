import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import jwtDecode from "jwt-decode";
import AuthApi from "../../auth/auth";
import logo from "../../assets/Images/loginimage/logo.png";
import group from "../../assets/Images/layouts/group.jpg";

function NewLoginPage() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { token } = useAuth();
  const { setUser } = useAuth();
  const { setId } = useAuth();
  const { setToken } = useAuth();
  const { setType } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(undefined);
  const [buttonText, setButtonText] = useState("Sign in");
  const [selectedUser, setSelectedUser] = useState("admin");
  const [rememberMe, setRememberMe] = useState(false);
  const [showLoginInterface, setShowLoginInterface] = useState(undefined);

  const login = async (event) => {
    event.preventDefault();

    if (user && token) {
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

      if (response.data && response.status === 200) {
        return navigate("/dashboard");
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
    usertype = JSON.stringify(usertype);

    localStorage.setItem("id", id);
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("token", token);
    localStorage.setItem("usertype", usertype);

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
    <div className="min-h-screen bg-cover bg-no-repeat bg-blur-2xl" style={{ backgroundImage: `url(${group})` }}>
      <div className="mx-auto py-24 grid grid-cols-2">
        <div className="py-2 mx-auto bg-cover bg-no-repeat" style={{ backgroundImage: `url(${group})` }}>
          <div className="logo-container">
            <img src={logo} alt="Logo" className="logo" />
          </div>
          <div className="flex flex-col">
            <button onClick={() => handleUserSelection("admin")}>
              Admin
            </button>
            <button onClick={() => handleUserSelection("manager")}>
              Manager
            </button>
            <button onClick={() => handleUserSelection("employee")}>
              Employee
            </button>
          </div>
        </div>
        <div className={`login-interface-box ${showLoginInterface ? "show" : ""}`}>
          <h2>Login as {selectedUser}</h2>
          <form>
            {selectedUser === "admin" && (
              <>
                <label htmlFor="adminemail">Admin Email</label>
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
                <input
                  onChange={(event) => {
                    setPassword(event.target.value);
                    setError(undefined);
                  }}
                  type="password"
                  value={password}
                  id="adminPassword"
                />

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
          <div className="mt-4">
            <span className="text-sm font-medium text-navy-700 dark:text-gray-600">
              Not registered yet?
            </span>
            <Link className="flex float-right ml-1 text-sm font-medium text-brand-500 hover:text-brand-600 dark:text-white" to="/register">
              Create an account
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewLoginPage;
