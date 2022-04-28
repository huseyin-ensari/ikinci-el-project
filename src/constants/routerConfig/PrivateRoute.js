import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../../contexts/authContext';

const PrivateRoutes = () => {
    const { isLogged } = useAuth();

    if (!isLogged) {
        return <Navigate to={'/register'} />;
    }

    return <Outlet />;
};

export default PrivateRoutes;
