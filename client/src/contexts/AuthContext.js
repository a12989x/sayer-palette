import React, { useState, createContext } from 'react';
import axios from 'axios';

import History from '../components/History';

export const AuthContext = createContext();

const AuthContextProvider = (props) => {
    const [isSignIn, setIsSignIn] = useState(false);
    const [user, setUser] = useState({});

    const signIn = async (e, values) => {
        e.preventDefault();
        const { username, password } = values;

        try {
            const params = { username, password };
            const res = await axios.post('/api/users/login-user', params);
            History.push('/');
            console.log(res.data);
            setIsSignIn(true);
            setUser({
                username: res.data.username,
                email: res.data.email,
                role: res.data.role,
            });
        } catch (error) {
            console.log(error);
        }
    };

    const register = () => {};

    return (
        <AuthContext.Provider value={{ isSignIn, setIsSignIn, signIn }}>
            {props.children}
        </AuthContext.Provider>
    );
};

export default AuthContextProvider;
