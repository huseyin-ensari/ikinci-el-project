import { createContext, useContext, useEffect, useState } from 'react';
import { fetchMe } from '../services/authServices';

const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
    const [email, setEmail] = useState('');
    const [isLogged, setIsLogged] = useState(false);

    useEffect(() => {
        getMe();
    }, []);

    const getMe = async () => {
        try {
            const { data } = await fetchMe();
            console.log('effec içindeki {data}', data);
            setEmail(data.email);
            setIsLogged(true);
        } catch (err) {
            setIsLogged(false);
            setEmail('');
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
        isLogged
    };

    return (
        <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
export default AuthContextProvider;
