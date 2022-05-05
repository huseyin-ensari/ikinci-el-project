import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../../contexts/authContext';

const IsLogged = () => {
    const { isLogged } = useAuth();
    if (!isLogged) {
        return <Navigate to={'/login'} />;
    }

    return <Outlet />;
};

export default IsLogged;
