import React from 'react';
import axios from 'axios';

import { useForm } from '../useForm';

const SignIn = () => {
    const [values, handleChange] = useForm({ username: '', password: '' });

    return (
        <form className="sign-in">
            <label htmlFor="username">Username</label>
            <input
                required={true}
                type="text"
                id="username"
                name="username"
                value={values.username}
                onChange={handleChange}
            />

            <label htmlFor="password">Password</label>
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
