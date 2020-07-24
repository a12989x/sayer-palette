import React from 'react';

import SignIn from '../access/SignIn';
import Register from '../access/Register';

const Access = () => {
    return (
        <div>
            <p>Access Component</p>
            <input type="radio" id="signIn" />
            <label htmlFor="signIn">Sign In</label>

            <input type="radio" id="register" />
            <label htmlFor="register">Register</label>
            <SignIn />
            <Register />
        </div>
    );
};

export default Access;
