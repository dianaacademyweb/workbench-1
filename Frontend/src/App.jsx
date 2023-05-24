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
import ProfilePage from "./components/profile/Profilepage";
import UpdateProfile from "./components/profile/UpdateProfile";
import Profile from "./components/profile/Profile";
import Employe from "./layouts/employe";
import ListEmploy from './components/DashBoard/Employelist'
import Addemploye  from "./views/employes/Addemploye";
import Board from "./views/board/Board";
import Createboard from "./views/board/createboard";
import  Allboard  from "./views/board/Allboard";
import CreateProject from "./views/Projects/CreateProject";
import Listproject from "./views/Projects/Listproject";

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
             <Route path="/Profile" element={<Profile/>}>
               <Route index element={<ProfilePage/>}/>
               <Route path="profilepage" element={<ProfilePage/>}/>
               <Route path="Updateprofile" element={<UpdateProfile/>}></Route>
             </Route>
             <Route path="/employe" element={<Employe/>}>
               <Route index element={<ListEmploy/>}/>
               <Route path="employe" element={<ListEmploy/>}/>
               <Route path="addemploye" element={<Addemploye/>}></Route>
             </Route>
             <Route path="/Board" element={<Board/>}>
               <Route index element={<Allboard/>}/>
               <Route path="allboard" element={<Allboard/>}/>
               <Route path="createboard" element={<Createboard/>}></Route>
               <Route path="projects" element={<CreateProject/>}/>
               <Route path="listprojects" element={<Listproject/>}></Route>
             </Route>

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
