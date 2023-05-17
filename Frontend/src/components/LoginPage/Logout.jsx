import { useEffect } from "react";
import AuthApi from "../../auth/auth";
import { Navigate} from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

function Logout() {
  const { setUser } = useAuth();
  let {user} = useAuth();

  const handleLogout = async () => {
    await AuthApi.Logout(user);
    await setUser(null);
    localStorage.removeItem("user");
  };

  useEffect(() => {
    handleLogout();
  }, []);

  return <Navigate to = "/login" replace ={true}/>;
}
export default Logout;