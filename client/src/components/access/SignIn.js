import React from 'react';

const SignIn = () => {
    return (
        <form className="sign-in">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" />

            <label htmlFor="password">Password</label>
            <input type="password" id="password" />

            <button type="submit">Sign In</button>
        </form>
    );
};

export default SignIn;
