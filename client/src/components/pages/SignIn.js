import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { FaRegUserCircle } from 'react-icons/fa';
import { TiKeyOutline } from 'react-icons/ti';

import { useForm } from '../useForm';
import { AuthContext } from '../../contexts/AuthContext';

const SignIn = () => {
    const [values, handleChange] = useForm({ username: '', password: '' });
    const { setIsSignIn, signIn } = useContext(AuthContext);

    return (
        <form className="sign-in" onSubmit={(e) => signIn(e, values)}>
            <div className="container">
                <h1 className="title">Sign In</h1>
                <h4 className="description">
                    Enter your data to access the site.
                </h4>
                <div className="input-wrapper">
                    <input
                        required={true}
                        type="text"
                        id="username"
                        name="username"
                        value={values.username}
                        onChange={handleChange}
                        autoFocus={true}
                    />
                    <label htmlFor="username">
                        <span>Username</span>
                    </label>
                </div>

                <div className="input-wrapper">
                    <input
                        required={true}
                        type="password"
                        id="password"
                        name="password"
                        value={values.password}
                        onChange={handleChange}
                    />
                    <label htmlFor="password">
                        <span>Password</span>
                    </label>
                </div>

                <button
                    type="submit"
                    className="sign-in__button primary-button"
                >
                    Sign In
                </button>
                <NavLink to="register" className="sign-in__link">
                    You do not have an account? Sign up
                </NavLink>
            </div>
        </form>
    );
};

export default SignIn;
