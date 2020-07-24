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
        <main>
            <p>Access Component</p>
            <input
                defaultChecked={true}
                type="radio"
                id="signIn"
                name="sign-in"
                onClick={() => changeSignIn(true)}
            />
            <label htmlFor="signIn">Sign In</label>

            <input
                type="radio"
                id="register"
                name="sign-in"
                onClick={() => changeSignIn(false)}
            />
            <label htmlFor="register">Register</label>

            {isSignIn ? <SignIn /> : <Register />}
        </main>
    );
};

export default Access;
