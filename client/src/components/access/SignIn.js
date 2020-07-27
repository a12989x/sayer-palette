import React, { useEffect } from 'react';
import axios from 'axios';

import { useForm } from '../useForm';

const SignIn = () => {
    const [values, handleChange] = useForm({ username: '', password: '' });

    const signIn = async (e) => {
        e.preventDefault();
        const { username, password } = values;

        try {
            const params = { username, password };
            const res = await axios.post('/api/users/login-user', params);
            console.log(res.data);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <form className="sign-in" onSubmit={(e) => signIn(e)}>
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
