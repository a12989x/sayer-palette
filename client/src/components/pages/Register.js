import React, { useState, useContext } from 'react';
import { NavLink } from 'react-router-dom';

import 'tippy.js/dist/tippy.css';

import { useForm } from '../useForm';
import { AuthContext } from '../../contexts/AuthContext';
import { LanguageContext } from '../../contexts/LanguageContext';

const Register = () => {
    const [isEmailValidate, setIsEmailValidate] = useState(true);
    const [isPasswordValidate, setIsPasswordValidate] = useState(true);
    const [isConfirmPasswordValidate, setIsConfirmPasswordValidate] = useState(
        true
    );

    const { register } = useContext(AuthContext);
    const { t } = useContext(LanguageContext);

    const [values, handleChange] = useForm({
        name: '',
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
        <form className="register" onSubmit={(e) => register(e, values)}>
            <div className="container">
                <h1 className="title">{t('register.title')}</h1>
                <h4 className="description">{t('register.description')}</h4>
                <div className="input-wrapper">
                    <input
                        required={true}
                        type="text"
                        id="name"
                        name="name"
                        value={values.firstName}
                        autoFocus={true}
                        onChange={handleChange}
                    />
                    <label htmlFor="name">
                        <span>{t('register.name')}</span>
                    </label>
                </div>

                <div className="input-wrapper">
                    <input
                        required={true}
                        type="email"
                        id="email"
                        name="email"
                        value={values.email}
                        onChange={(e) => {
                            validateEmail(e);
                            handleChange(e);
                        }}
                    />
                    <label htmlFor="email">
                        <span>{t('register.email')}</span>
                    </label>
                </div>

                <div className="input-wrapper">
                    <input
                        required={true}
                        type="text"
                        id="username"
                        name="username"
                        value={values.username}
                        onChange={handleChange}
                    />
                    <label htmlFor="username">
                        <span>{t('register.username')}</span>
                    </label>
                </div>

                <div className="input-wrapper">
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
                    <label htmlFor="password">
                        <span>{t('register.password')}</span>
                    </label>
                </div>

                <div className="input-wrapper">
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
                    <label htmlFor="confirmPassword">
                        <span>{t('register.confirmPassword')}</span>
                    </label>
                </div>

                <button
                    className="register__button primary-button"
                    type="submit"
                >
                    {t('register.title')}
                </button>
                <NavLink to="sign-in" className="register__link">
                    {t('register.link')}
                </NavLink>
            </div>
        </form>
    );
};

export default Register;
