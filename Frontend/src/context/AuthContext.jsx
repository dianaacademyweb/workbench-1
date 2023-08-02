import React from "react";
import PropTypes from "prop-types";

const AuthContext = React.createContext(null);

export const AuthProvider = ({ userData, children }) => {
  
   
  let [user, setUser] = React.useState(userData);
  let [id, setId]= React.useState(userData); 
  let [token, setToken]= React.useState(userData);
  let [type, setType ] =React.useState(userData);
  let [usertype,setusertype ] =React.useState(userData);

  // user = typeof user === "string" ? JSON.parse(user) : user;

 
  return <AuthContext.Provider value={{ user, setUser, id, setId, token, setToken , type, setType , usertype, setusertype}}>{children}</AuthContext.Provider>;
};

AuthProvider.propTypes = {
  userData: PropTypes.any,
  children: PropTypes.any,
};
export const useAuth = () => React.useContext(AuthContext);
    
