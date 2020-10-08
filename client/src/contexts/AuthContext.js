import React, { useState, useEffect, createContext, useContext } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import cookie from 'react-cookies';

import 'react-toastify/dist/ReactToastify.css';

import { LanguageContext } from './LanguageContext';
import History from '../components/History';
import { notifySuccess, notifyError, notifyInfo } from '../components/Toastify';

export const AuthContext = createContext();

toast.configure();

const AuthContextProvider = (props) => {
    const [isSignIn, setIsSignIn] = useState(false);
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const { t } = useContext(LanguageContext);

    useEffect(() => {
        const isSign = cookie.load('isSignIn');
        isSign ? setIsSignIn(true) : setIsSignIn(false);
        isSign ? setUser(isSign) : setUser({});
    }, []);

    const signIn = async (e, values) => {
        e.preventDefault();
        setIsLoading(true);
        const { username, password } = values;

        try {
            const params = { username, password };
            const res = await axios.post('/api/users/login', params);
            History.push('/get-color');
            setIsSignIn(true);
            setIsLoading(false);
            setUser({
                username: res.data.username,
                email: res.data.email,
                role: res.data.role,
            });
            cookie.save(
                'isSignIn',
                {
                    username: res.data.username,
                    email: res.data.email,
                    role: res.data.role,
                },
                { path: '/', sameSite: true }
            );
            notifySuccess(t('notify.signIn.success'));
        } catch (error) {
            setIsLoading(false);
            notifyError(t('notify.signIn.error'));
        }
    };

    const register = async (e, values) => {
        e.preventDefault();
        const { name, email, username, password, confirmPassword } = values;

        try {
            const params = {
                name,
                email,
                username,
                password,
                repeat_password: confirmPassword,
            };
            const res = await axios.post('/api/users/register', params);
            History.push('/sign-in');
            notifySuccess(t('notify.register.success'));
        } catch (error) {
            notifyError(t('notify.register.error'));
        }
    };

    const signOut = async () => {
        try {
            await axios.post('/api/users/logout');
            cookie.remove('isSignIn');
            History.push('/sign-in');
            setIsSignIn(false);
            setUser({});
            notifyInfo(t('notify.signOut.success'));
        } catch (error) {
            notifyError(t('notify.signOut.error'));
        }
    };

    return (
        <AuthContext.Provider
            value={{
                user,
                isSignIn,
                isLoading,
                setIsSignIn,
                signIn,
                register,
                signOut,
            }}
        >
            {props.children}
        </AuthContext.Provider>
    );
};

export default AuthContextProvider;
