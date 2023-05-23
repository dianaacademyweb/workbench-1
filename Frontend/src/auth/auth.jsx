import axios from "./index";

class AuthApi {
  static Login = (data) => {
    return axios.post(`/token/`, data);
  };

  static Register = (data) => {
    return axios.post(`${base}/register`, data);
  };

  static Logout = (data) => {
    console.log("hello i m  here");
    return axios.post(`${base}/logout`);
    
  };
}

let base = "users";

export default AuthApi;