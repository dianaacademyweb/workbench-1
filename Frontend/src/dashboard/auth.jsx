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
  static createTask = (data) => {
    const token = localStorage.getItem("token");
    return axios.post(`${base2}/task`, data,{
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  };


  static projectsdetails = (id) => {
    const token = localStorage.getItem("token");
    return axios.get(`${base2}/createemploye/${id}`,{
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  };
  static createProject = (data) => {
    const token = localStorage.getItem("token");
    return axios.post(`${base2}/projects`, data,{
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  };
  static ListProject = (data) => {
    const id = localStorage.getItem("id");
    const token = localStorage.getItem("token");
    return axios.get(`${base}/Projectlist/${id}/`, data,{
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  };
  static ProjectLinker = (data) => {
    const token = localStorage.getItem("token");
    return axios.post(`${base2}/projectlinker`, data,{
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


static createteam = (data) => {
    const token = localStorage.getItem("token");
    return axios.post(`${base2}/teams`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  };
  
static boardlist = (data) => {
  const id = localStorage.getItem("id");
  const token = localStorage.getItem("token");
  return axios.get(`${base}/boardlist/${id}/`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

static Teamlist = (data) => {
  const id = localStorage.getItem("id");
  const token = localStorage.getItem("token");
  return axios.get(`${base}/teamlist/${id}/`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};


static Getimage = (data) => {
  const id = localStorage.getItem("id");
  const token = localStorage.getItem("token");
  return axios.get(`${base}/seeimage/${id}/`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
static Profile = (data) => {
  const token = localStorage.getItem("token");
  return axios.post(`${base2}/Profile`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
static SeeProfile = () => {
  const id = localStorage.getItem("id")
  const token = localStorage.getItem("token");
  return axios.get(`${base}/seeprofile/${id}/`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
static uploadimage = (data) => {
  const token = localStorage.getItem("token");
  const id = localStorage.getItem("id");
  return axios.post(`${base2}/imageupload`,data,{
    headers: {
      Authorization: `Bearer ${token}`,

    },
  });
};
static Taskdetails = (data) => {
  const id = localStorage.getItem("id");
  const token = localStorage.getItem("token");
  return axios.get(`${base}/taskdetail/${id}/`, data,{
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
static Teamsdetail = (data) => {
  const id = localStorage.getItem("id");
  const token = localStorage.getItem("token");
  return axios.get(`${base}/seeteams/${id}/`, data,{
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};



static MonitoringList = (id) => {
  const od = localStorage.getItem("id");
  const token = localStorage.getItem("token");
  return axios.get(`${base}/${od}/monitor/${id}/details/`,{
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};


static Teamsdetails = (id) => {
  const od = localStorage.getItem("id");
  const token = localStorage.getItem("token");
  return axios.get(`${base}/boardwiseteams/${od}/board/${id}/`,{
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};







}





let base = "dashboard";
let base2 = "users"

export default DashApi;