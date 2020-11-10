import React, { useState, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AiFillInfoCircle } from 'react-icons/ai';
import { UncontrolledTooltip } from 'reactstrap';

import 'tippy.js/dist/tippy.css';

import { useForm } from '../useForm';
import { AuthContext } from '../../contexts/AuthContext';
import { LanguageContext } from '../../contexts/LanguageContext';

const Register = () => {
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

    const validateConfirmPassword = (e) => {
        const confirmPassword = e.target.value;

        if (confirmPassword.length === 0) setIsConfirmPasswordValidate(true);
        else if (confirmPassword !== values.password)
            setIsConfirmPasswordValidate(false);
        else if (confirmPassword === values.password)
            setIsConfirmPasswordValidate(true);
    };

    return (
        <form className='register' onSubmit={(e) => register(e, values)}>
            <div className='container'>
                <h1 className='title'>{t('register.title')}</h1>
                <h4 className='description'>{t('register.description')}</h4>
                <div className='input-wrapper'>
                    <input
                        required={true}
                        type='text'
                        id='name'
                        name='name'
                        value={values.firstName}
                        autoFocus={true}
                        minLength='3'
                        maxLength='80'
                        onChange={handleChange}
                    />
                    <label htmlFor='name'>
                        <span>{t('register.name')}</span>
                    </label>
                    <AiFillInfoCircle id='nameFillInfoCircle' />
                    <UncontrolledTooltip
                        placement='left'
                        target='nameFillInfoCircle'
                        className='tooltip'
                    >
                        <ul>
                            <li>min: 3</li> <li>max: 80</li>
                        </ul>
                    </UncontrolledTooltip>
                </div>

                <div className='input-wrapper'>
                    <input
                        required={true}
                        type='email'
                        id='email'
                        name='email'
                        value={values.email}
                        minLength='4'
                        maxLength='254'
                        onChange={handleChange}
                    />
                    <label htmlFor='email'>
                        <span>{t('register.email')}</span>
                    </label>
                    <AiFillInfoCircle id='emailFillInfoCircle' />
                    <UncontrolledTooltip
                        placement='left'
                        target='emailFillInfoCircle'
                        className='tooltip'
                    >
                        <ul>
                            <li>min: 4</li> <li>max: 254</li>
                        </ul>
                    </UncontrolledTooltip>
                </div>

                <div className='input-wrapper'>
                    <input
                        required={true}
                        type='text'
                        id='username'
                        name='username'
                        value={values.username}
                        minLength='5'
                        maxLength='50'
                        onChange={handleChange}
                    />
                    <label htmlFor='username'>
                        <span>{t('register.username')}</span>
                    </label>
                    <AiFillInfoCircle id='UsernameFillInfoCircle' />
                    <UncontrolledTooltip
                        placement='left'
                        target='UsernameFillInfoCircle'
                        className='tooltip'
                    >
                        <ul>
                            <li>min: 5</li> <li>max: 50</li>
                        </ul>
                    </UncontrolledTooltip>
                </div>

                <div className='input-wrapper'>
                    <input
                        required={true}
                        type='password'
                        id='password'
                        name='password'
                        value={values.password}
                        minLength='8'
                        maxLength='250'
                        onChange={handleChange}
                    />
                    <label htmlFor='password'>
                        <span>{t('register.password')}</span>
                    </label>
                    <AiFillInfoCircle id='passwordFillInfoCircle' />
                    <UncontrolledTooltip
                        placement='left'
                        target='passwordFillInfoCircle'
                        className='tooltip'
                    >
                        <ul>
                            <li>min: 8</li> <li>max: 250</li>
                        </ul>
                    </UncontrolledTooltip>
                </div>

                <div className='input-wrapper'>
                    <input
                        className={`${
                            !isConfirmPasswordValidate ? 'notMatched' : ''
                        }`}
                        required={true}
                        type='password'
                        id='confirmPassword'
                        name='confirmPassword'
                        value={values.confirmPassword}
                        minLength='8'
                        maxLength='250'
                        onChange={(e) => {
                            validateConfirmPassword(e);
                            handleChange(e);
                        }}
                    />
                    <label htmlFor='confirmPassword'>
                        <span>{t('register.confirmPassword')}</span>
                    </label>

                    {!isConfirmPasswordValidate && (
                        <>
                            <AiFillInfoCircle id='confirmPasswordFillInfoCircle' />
                            <UncontrolledTooltip
                                placement='left'
                                target='confirmPasswordFillInfoCircle'
                                className='tooltip'
                            >
                                <ul>
                                    <li>Passwords do not match</li>
                                </ul>
                            </UncontrolledTooltip>
                        </>
                    )}
                </div>

                <button
                    className='register__button primary-button'
                    type='submit'
                >
                    {t('register.title')}
                </button>
                <NavLink to='sign-in' className='register__link'>
                    {t('register.link')}
                </NavLink>
            </div>
        </form>
    );
};

export default Register;
