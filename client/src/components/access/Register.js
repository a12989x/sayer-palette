import React, { useState } from 'react';
import Tippy from '@tippyjs/react';
import { FaRegUserCircle, FaInfoCircle } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
import { TiKeyOutline } from 'react-icons/ti';

import 'tippy.js/dist/tippy.css';

import { useForm } from '../useForm';

const Register = () => {
    const [isEmailValidate, setIsEmailValidate] = useState(true);
    const [isPasswordValidate, setIsPasswordValidate] = useState(true);
    const [isConfirmPasswordValidate, setIsConfirmPasswordValidate] = useState(
        true
    );

    const [values, handleChange] = useForm({
        firstName: '',
        lastName: '',
        email: '',
        username: '',
        password: '',
        confirmPassword: '',
    });

    const validateEmail = (e) => {
        const email = e.target.value;
        const validate = () => {
            const re = /\S+@\S+\.\S+/;
            return re.test(email);
        };

        if (email.length === 0) {
            setIsEmailValidate(true);
            return;
        }
        if (validate(email)) setIsEmailValidate(true);
        else setIsEmailValidate(false);
    };

    const validatePassword = (e) => {
        const password = e.target.value;

        if (password.length === 0) setIsPasswordValidate(true);
        else if (password.length < 8 || password.length > 50)
            setIsPasswordValidate(false);
        else setIsPasswordValidate(true);
    };

    const validateConfirmPassword = (e) => {
        const confirmPassword = e.target.value;

        if (confirmPassword.length === 0) setIsConfirmPasswordValidate(true);
        else if (confirmPassword !== values.password)
            setIsConfirmPasswordValidate(false);
        else if (confirmPassword === values.password)
            setIsConfirmPasswordValidate(true);
    };

    return (
        <form className="register">
            <label htmlFor="firstName">
                <FaRegUserCircle size="1.2rem" /> First Name
            </label>
            <label htmlFor="secondName">
                <FaRegUserCircle size="1.2rem" /> Last Name
            </label>

            <input
                required={true}
                type="text"
                id="firstName"
                name="firstName"
                value={values.firstName}
                onChange={handleChange}
            />
            <input
                required={true}
                type="text"
                id="secondName"
                name="lastName"
                value={values.lastName}
                onChange={handleChange}
            />

            <label htmlFor="email">
                <FiMail size="1.2rem" />
                Email
                <Tippy
                    placement="right"
                    content={<span>Please Enter a valid email</span>}
                >
                    <span
                        className={`tooltip tooltip-email${
                            !isEmailValidate ? '-active' : ''
                        }`}
                    >
                        <FaInfoCircle size="1.2rem" />
                    </span>
                </Tippy>
            </label>
            <label htmlFor="username">
                <FaRegUserCircle size="1.2rem" /> Username
            </label>

            <input
                required={true}
                type="email"
                id="email"
                onChange={(e) => {
                    validateEmail(e);
                    handleChange(e);
                }}
            />

            <input
                required={true}
                type="text"
                id="username"
                name="username"
                value={values.username}
                onChange={handleChange}
            />

            <label htmlFor="password">
                <TiKeyOutline size="1.2rem" />
                Password
                <Tippy
                    placement="right"
                    content={<span>8 characters minimum and 50 maximum</span>}
                >
                    <span
                        className={`tooltip tooltip-password${
                            !isPasswordValidate ? '-active' : ''
                        }`}
                    >
                        <FaInfoCircle size="1.2rem" />
                    </span>
                </Tippy>{' '}
            </label>
            <label htmlFor="confirmPassword">
                <TiKeyOutline size="1.2rem" />
                Confirm Password
                <Tippy
                    placement="right"
                    content={
                        <span>
                            {values.password.length === 0
                                ? 'Please enter a password first'
                                : 'Passwords must match'}
                        </span>
                    }
                >
                    <span
                        className={`tooltip tooltip-confirm-password${
                            !isConfirmPasswordValidate ? '-active' : ''
                        }`}
                    >
                        <FaInfoCircle size="1.2rem" />
                    </span>
                </Tippy>
            </label>

            <input
                required={true}
                type="password"
                id="password"
                name="password"
                value={values.password}
                onChange={(e) => {
                    validatePassword(e);
                    handleChange(e);
                }}
            />
            <input
                required={true}
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={values.confirmPassword}
                onChange={(e) => {
                    validateConfirmPassword(e);
                    handleChange(e);
                }}
            />

            <button type="submit">Register</button>
        </form>
    );
};

export default Register;
