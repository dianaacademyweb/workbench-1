import React  from "react";
import {  Home, Login_page, NotFound } from "./components";
import Navbar from "./components/navbar/index";
import { AuthProvider } from "./context/AuthContext";
import styles from "../Style";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dash from './layouts/admin/Dash'
import Register from "./components/Register";
import PrivateRoutes from "./utils/PrivateRoutes";

function App() {
  let user = localStorage.getItem("user");
  user = JSON.parse(user);
  return (
    <div className="App ">
      <BrowserRouter>
        <AuthProvider userData={user}>
          <Routes> 
          <Route element={<Home />}   path="/"  exact />
          <Route  path="/login" element={<Login_page />} />
          <Route  path="/register" element={<Register />} />
          <Route element={<PrivateRoutes/>}>
          <Route element ={<Dash/>} path="/dashboard"/>
          </Route>
          
          <Route  path="*" element={<NotFound />} />
          </Routes>
          
        </AuthProvider>
      </BrowserRouter>
      <div className=" w-full overflow-hidden " id="Home">
        <div className={`${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}></div>

          <div className="bg-black-gradient"></div>
        </div>
      </div>
      <div className={`${styles.boxWidth}`}></div>
    </div>
  );
}

export default App;
