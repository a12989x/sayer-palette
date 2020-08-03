import React, { useContext } from 'react';
import axios from 'axios';
import { FaRegUserCircle } from 'react-icons/fa';
import { TiKeyOutline } from 'react-icons/ti';

import { useForm } from '../useForm';
import History from '../History';
import { AuthContext } from '../../contexts/AuthContext';

const SignIn = () => {
    const [values, handleChange] = useForm({ username: '', password: '' });
    const { setIsSignIn, signIn } = useContext(AuthContext);

    return (
        <form className="sign-in" onSubmit={(e) => signIn(e, values)}>
            <label htmlFor="username">
                <FaRegUserCircle /> Username
            </label>
            <input
                required={true}
                type="text"
                id="username"
                name="username"
                value={values.username}
                onChange={handleChange}
            />

            <label htmlFor="password">
                <TiKeyOutline /> Password
            </label>
            <input
                required={true}
                type="password"
                id="password"
                name="password"
                value={values.password}
                onChange={handleChange}
            />

            <button type="submit">Sign In</button>
        </form>
    );
};

export default SignIn;
