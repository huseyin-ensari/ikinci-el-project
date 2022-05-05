import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../../contexts/authContext';

const IsNotLogged = () => {
    const { isLogged } = useAuth();

    if (isLogged) {
        return <Navigate to={'/'} />;
    }
    return <Outlet />;
};

export default IsNotLogged;
