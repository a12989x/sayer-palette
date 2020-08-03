import React, { useState, createContext } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

import History from '../components/History';

export const AuthContext = createContext();

toast.configure();

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
            notifySuccess('You sign in correctly');
        } catch (error) {
            notifyError('Username or email incorrect');
        }
    };

    const register = async (e, values) => {
        e.preventDefault();
        const {
            firstName,
            lastName,
            email,
            username,
            password,
            confirmPassword,
        } = values;
        const name = `${firstName} ${lastName}`;

        try {
            const params = {
                name,
                email,
                username,
                password,
                repeat_password: confirmPassword,
            };
            const res = await axios.post('/api/users/register-user', params);
            notifySuccess('You register correctly');
        } catch (error) {
            notifyError('Please make sure if your credentials are valid');
        }
    };

    const notifySuccess = (message) => {
        toast.success(message, {
            position: 'top-right',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    };

    const notifyError = (message) => {
        toast.error(message, {
            position: 'top-right',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    };

    return (
        <AuthContext.Provider
            value={{ isSignIn, setIsSignIn, signIn, register }}
        >
            {props.children}
        </AuthContext.Provider>
    );
};

export default AuthContextProvider;
