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
import Employe from "./views/employes";
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
import Reports from "./views/reports/Reports";
import TopActivity from "./views/reports/TopActivity";
import EmployeeReports from "./views/reports/EmployeeReports";
import ActivityPattern from "./views/reports/ActivityPattern";
import AdvancedReport from "./views/reports/AdvancedReport";
import Designation from "./views/settings/designation";
import Activity from "./views/settings/activity";
import ActivitySet from "./views/settings/ActivitySet";
import Shifts from "./views/settings/Shifts";
import Timezone from "./views/settings/Timezone";
import EmailDigest from "./views/settings/EmailDigest";
import General from "./views/settings/general";
import DormantEmployee from "./views/reports/DormantEmployee";
import HighIdleHours from "./views/reports/HighIdleHours";
import AttendanceReport from "./views/reports/AttendanceReport";
import TimeLog from "./views/reports/TimeLog";
import HolidayDefinition from "./views/settings/HolidayDefinition";
import OtReport from "./views/reports/OtReport";
import ClientAppActivity from "./views/reports/ClientAppActivity";

import Employepage from "./views/employes/Employepage";

import Boardpage from "./views/board/Boardpage";
import Projectspage from "./views/Projects/Projectspage";
import Teamspage from "./views/teams/Teampage";
import EmployeeDash from "./EmployeeDash/EmployeeDash";



function App() {
  let user = localStorage.getItem("id");
  user = JSON.parse(user);
  const usertype = localStorage.getItem("type")
  return (
    <div className="App ">
      <BrowserRouter>
        <AuthProvider userData={user}>
          <Routes> 
          <Route element={<NewHome/>}   path="/"  exact />
          <Route element={<OurTeam/>}   path="/ourteam"  exact />
          <Route element={<Leader/>}   path="/leader"  exact />
          <Route element ={<AdvancedReport/>}path="/advancedreport" />
          <Route element={<Hr/>}   path="/hr"  exact />
          <Route element={<Designation/>}   path="/designation"  exact />
          <Route element={<Activity/>}   path="/activity"  exact />
          <Route element={<ActivitySet/>}   path="/activityset"  exact />
          <Route element={<Shifts/>}   path="/shifts"  exact />
          <Route element={<Timezone/>}   path="/timezone"  exact />
          <Route element={<EmailDigest/>}   path="/emaildigest"  exact />
          <Route element={<General/>}   path="/general"  exact />
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

          {/* these are the privates routes no one can enter in these with out authentication  */}


          <Route element={<PrivateRoutes/>}>

          <Route element ={<Dash/>} path="/dashboard"/>


          
          {usertype === 'employe' &&  <Route element ={<Dash/>} path="/dashboard"/>}
          <Route element ={<TopActivity/>} path="/topactivity"/>
          <Route element ={<EmployeeReports/>} path="/employeereports"/>
          <Route element ={<EmployeeDash/>} path="/mysentinel"/>




          {usertype === 'organization' &&  <Route exact path="employee/:id" element={<Employepage/>} />}

          {usertype === 'organization' &&            <Route exact path="board/:id" element={<Boardpage/>} />
}

          {usertype === 'organization' &&            <Route exact path="board/allboard/:id" element={<Boardpage/>} />
}

          {usertype === 'organization' &&            <Route exact path="board/listprojects/:id" element={<Projectspage/>} />
}

          {usertype === 'organization' &&            <Route exact path="teams/:id" element={<Teamspage/>} />
}

          





    
          <Route element ={<Reports/>}path="/reports" />
          <Route element ={<ActivityPattern/>}path="/activitypattern" />
          <Route element ={<DormantEmployee/>}path="/dormantemployee" />
          <Route element ={<HighIdleHours/>}path="/highidlehours" />
          <Route element ={<AttendanceReport/>}path="/attendancereport" />
          <Route element ={<TimeLog/>}path="/timelog" />
          <Route element ={<HolidayDefinition/>}path="/holidaydefinition" />
          <Route element ={<OtReport/>}path="/otreport" />
          <Route element ={<ClientAppActivity/>}path="/clientappactivity" />
          <Route path="/Profile" element={<Profile/>}>
          <Route index element={<Profiledetail/>}/>
          <Route path="profilepage" element={<Profiledetail/>}/>
          <Route path="Updateprofile" element={<CreateProfile/>}></Route>
               
             </Route>

             {usertype === 'organization' &&  
             <Route path="/employee" element={<Employe/>}>
               <Route index element={<ListEmploy/>}/>
               <Route path="employe" element={<ListEmploy/>}/>
               <Route path="addemployee" element={<Addemploye/>}></Route>
             </Route>}




             
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
