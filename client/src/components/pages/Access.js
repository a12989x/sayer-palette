import React, { useState } from 'react';

import SignIn from '../access/SignIn';
import Register from '../access/Register';

const Access = () => {
    const [isSignIn, setIsSignIn] = useState(true);

    const changeSignIn = (value) => {
        if (value) setIsSignIn(true);
        else setIsSignIn(false);
    };

    return (
        <main
            className="access"
            style={isSignIn ? { maxWidth: '500px' } : { maxWidth: '900px' }}
        >
            <input
                defaultChecked={true}
                type="radio"
                id="signIn"
                name="sign-in"
                onClick={() => changeSignIn(true)}
            />
            <label
                className={`access__sign-in ${isSignIn ? 'active' : ''}`}
                htmlFor="signIn"
            >
                Sign In
            </label>

            <input
                type="radio"
                id="register"
                name="sign-in"
                onClick={() => changeSignIn(false)}
            />
            <label
                className={`access__register ${!isSignIn ? 'active' : ''}`}
                htmlFor="register"
            >
                Register
            </label>

            {isSignIn ? <SignIn /> : <Register />}
        </main>
    );
};

export default Access;
