import { Outlet, Navigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const PrivateRoutes = () => {
    const { user } = useAuth();
    if (!user || !user.token || user.token === "") {

    
    return user ? <Outlet /> : <Navigate to='/login' />;

  }  };

export default PrivateRoutes;