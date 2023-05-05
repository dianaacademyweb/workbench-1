import React  from "react";
import { Navbar, Home, Login_page, NotFound } from "./components";
import { AuthProvider } from "./context/AuthContext";
import styles from "../Style";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./components/DashBoard/Dasboard";
import PrivateRoute from "./utils/PrivateRoute";

function App() {
  return (
    <div className="App ">
      <BrowserRouter>
        <AuthProvider>
          <Navbar />
          <Routes>
          <Route element={<Home />}   path="/"  exact />
          <Route  path="/login" element={<Login_page />} />
          <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
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
