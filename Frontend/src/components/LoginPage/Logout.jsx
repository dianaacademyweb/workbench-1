import { useEffect } from "react";
import AuthApi from "../../auth/auth";
import { Navigate} from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

function Logout() {
  const { setUser } = useAuth();
  let { user } = useAuth();

  const handleLogout = async () => {
    await AuthApi.Logout(user);
    await setUser(null);
    localStorage.removeItem("user");
    return Navigate("/login");
  };

  useEffect(() => {
    handleLogout();
  }, []);

  return null;
}
export default Logout;