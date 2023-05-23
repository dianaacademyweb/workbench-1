import axios from "./index";
import { useAuth } from '../context/AuthContext'


class DashApi {
  
  
  static Employelist = () => {
    const token = localStorage.getItem("token");
    const id = localStorage.getItem("id");
    return axios.get(`${base}/employelist/${id}/`,{
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  };

  static createEmploye = (data) => {
    const token = localStorage.getItem("token");
    return axios.post(`${base2}/createemploye`, data,{
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  };

  static createboard = (data) => {
    const token = localStorage.getItem("token");
    return axios.post(`${base2}/createboard`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  };
static boardlist = (data) => {
  const id = localStorage.getItem("id");
  const token = localStorage.getItem("token");
  return axios.get(`${base}/createboard/${id}`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
}

let base = "dashboard";
let base2 = "users"

export default DashApi;