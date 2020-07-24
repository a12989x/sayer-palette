import React from 'react';

const Register = () => {
    return (
        <div>
            <label htmlFor="firstName">First Name</label>
            <input type="text" id="firstName" />

            <label htmlFor="secondName">Second Name</label>
            <input type="text" id="secondName" />

            <label htmlFor="email">Email</label>
            <input type="email" id="email" />

            <label htmlFor="username">Username</label>
            <input type="text" id="username" />

            <label htmlFor="password">Password</label>
            <input type="password" id="password" />

            <label htmlFor="confirmPassword">Confirm Password</label>
            <input type="password" id="confirmPassword" />

            <button type="submit">Register</button>
        </div>
    );
};

export default Register;
