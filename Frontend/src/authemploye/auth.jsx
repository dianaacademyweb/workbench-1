import axios from "./index";


class EmplyeApi {
  
  
  
  static Employelist = () => {
    const token = localStorage.getItem("token");
    const id = localStorage.getItem("id");
    return axios.get(`${base}/employelist/${id}/`,{
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  };

  static attendanceReport = (id , params) => {
    const token = localStorage.getItem("token");
    return axios.get(`${base}/attendancelist/${id}/`, params,{
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  };
  static logoutreports = (id , params) => {
    const token = localStorage.getItem("token");
    return axios.get(`${base}/logoutlist/${id}/`, params,{
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  };







}





let base = "dashboard";
let base2 = "users"

export default EmplyeApi;