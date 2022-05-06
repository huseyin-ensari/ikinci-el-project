import { createContext, useContext, useEffect, useState } from 'react';
import { Loader } from '../components/basics';
import { fetchMe } from '../services/authServices';

const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
    const [userID, setUserID] = useState();
    const [email, setEmail] = useState('');
    const [isLogged, setIsLogged] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getMe();
    }, []);

    const getMe = async () => {
        try {
            const { data } = await fetchMe();
            setUserID(data.id);
            setEmail(data.email);
            setIsLogged(true);
            setLoading(false);
        } catch (err) {
            setIsLogged(false);
            setLoading(false);
            setEmail('');
            setUserID(null);
        }
    };

    const login = (response) => {
        const { user, jwt } = response.data;
        setIsLogged(true);
        setEmail(user.email);
        localStorage.setItem('access-token', jwt);
    };

    const values = {
        login,
        email,
        userID,
        isLogged
    };

    if (loading) {
        return <Loader />;
    }

    return (
        <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
export default AuthContextProvider;
