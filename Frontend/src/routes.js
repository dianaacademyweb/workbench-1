import React from "react";
import Employe from "./layouts/Employe";
import {
  MdHome,
  MdOutlineShoppingCart,
  MdBarChart,
  MdPerson,
  MdLock,
} from "react-icons/md";
export const routes = [
  {
    name: "Dashboard",
    layout: "/dashboard",
    path: "/dashboard",
    icon: <MdHome className="h-6 w-6" />,
    component: <Employe/>,
  },
  {
    name: "Employes",
    layout: "/employes",
    path: "/employes",
    icon: <MdLock className="h-6 w-6" />,
    component: <Employe/>,
  },

];
export default routes;