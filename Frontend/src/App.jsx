import React  from "react";
import { Home, NotFound , DashApi } from "./components";
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
import ListEmploy from './views/employes/AllEmpplyee'
import Addemploye  from "./views/employes/Addemploye";
import Board from "./views/board/Board";
import Createboard from "./views/board/Createboard";
import  Allboard  from "./views/board/Allboard";
import CreateProject from "./views/Projects/CreateProject";
import Listproject from "./views/Projects/Listproject";
import Profiledetail from './components/profile/SeeProfile';
import CreateProfile from './components/profile/Profilepage';
import Addtask from "./views/tasks/task";
import Task from "./views/tasks";
import AllTask from "./views/tasks/AllTask";
import NewHome from "./components/NewHome"
import Newloginpage from "./components/LoginPage/newloginpage";
import NewLogin from "./components/LoginPage/NewLogin";
import Leader from "./components/teams/Leader";
import Hr from "./components/teams/Hr";
import Administration from "./components/teams/Administration";
import Manager from "./components/teams/Manager";
import Sales from "./components/teams/Sales";
import Creative from "./components/teams/Creative";

import EmployeeOnboarding from "./components/onborad/EmployeeOnboarding";
import Technical from "./components/teams/Technical";
import Teams from "./views/teams";
import TeamsAdd from "./views/teams/Teamadd";
import AllTeams from "./views/teams/AllTeams";

import ContactUs from "./components/ContactUs";
import OurTeam from "./components/OurTeam";


function App() {
  let user = localStorage.getItem("id");
  user = JSON.parse(user);
  return (
    <div className="App ">
      <BrowserRouter>
        <AuthProvider userData={user}>
          <Routes> 
          <Route element={<NewHome/>}   path="/"  exact />
          <Route element={<OurTeam/>}   path="/ourteam"  exact />
          <Route element={<Leader/>}   path="/leader"  exact />
          <Route element={<Hr/>}   path="/hr"  exact />
          <Route element={<Administration/>}   path="/administration"  exact />
          <Route element={<Sales />}   path="/sales"  exact />
          <Route element={<Creative/>}   path="/creative"  exact />
          <Route element={<ContactUs/>}   path="/contactus"  exact />
          <Route element={<EmployeeOnboarding/>}   path="/employee-onboarding"  exact />
          <Route element={<Technical/>}   path="/technical"  exact />
          <Route element={<Manager/>}   path="/manager"  exact />
          <Route  path="/login" element={<Newloginpage />} />
          <Route element={<Home />}   path="/"  exact />
          <Route  path="/login" element={<Newloginpage />} />
          <Route  path="/register" element={<Register />} />
          <Route element={<PrivateRoutes/>}>
          <Route element ={<Dash/>} path="/dashboard"/>
       
          <Route path="/Profile" element={<Profile/>}>
          <Route index element={<Profiledetail/>}/>
          <Route path="profilepage" element={<Profiledetail/>}/>
          <Route path="Updateprofile" element={<CreateProfile/>}></Route>
               
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



             <Route path="/task" element={<Task/>}>
               <Route index element={<AllTask/>}/>
               <Route path="task" element={<AllTask/>}/>
               <Route path="addtask" element={<Addtask/>}></Route>
             </Route>

             <Route path="/teams" element={<Teams/>}>
               <Route index element={<AllTeams/>}/>
               <Route path="/teams" element={<AllTeams/>}/>
               <Route path="addteams" element={<TeamsAdd/>}></Route>
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
