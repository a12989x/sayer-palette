import React, { useState } from 'react';

const Register = () => {
    const [emailValidation, setEmailValidation] = useState(true);

    const validateEmail = (e) => {
        const email = e.target.value;
        const validate = () => {
            const re = /\S+@\S+\.\S+/;
            return re.test(email);
        };

        if (email.length === 0) {
            setEmailValidation(true);
            return;
        }
        if (validate(email)) console.log('true');
        else setEmailValidation(false);
    };

    return (
        <form className="register">
            <label htmlFor="firstName">First Name</label>
            <label htmlFor="secondName">Second Name</label>

            <input type="text" id="firstName" />
            <input type="text" id="secondName" />

            <label htmlFor="email">Email</label>
            <label htmlFor="username">Username</label>

            <input type="email" id="email" onChange={(e) => validateEmail(e)} />
            {!emailValidation && (
                <span className="register__email-validation-text">
                    Please enter a valid email
                </span>
            )}
            <input type="text" id="username" />

            <label htmlFor="password">Password</label>
            <label htmlFor="confirmPassword">Confirm Password</label>

            <input type="password" id="password" />
            <input type="password" id="confirmPassword" />

            <button type="submit">Register</button>
        </form>
    );
};

export default Register;
