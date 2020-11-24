import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { ClipLoader } from 'react-spinners';

import { useForm } from '../../hooks/useForm';
import { AuthContext } from '../../contexts/AuthContext';
import { LanguageContext } from '../../contexts/LanguageContext';

const SignIn = () => {
    const [values, handleChange] = useForm({ username: '', password: '' });
    const { signIn, isLoading } = useContext(AuthContext);
    const { t } = useContext(LanguageContext);

    return (
        <form className='sign-in' onSubmit={(e) => signIn(e, values)}>
            <div className='container'>
                <h1 className='title'>{t('signIn.title')}</h1>
                <h4 className='description'>{t('signIn.description')}</h4>
                <div className='input-wrapper'>
                    <input
                        required={true}
                        type='text'
                        id='username'
                        name='username'
                        value={values.username}
                        onChange={handleChange}
                        autoFocus={true}
                    />
                    <label htmlFor='username'>
                        <span>{t('signIn.user')}</span>
                    </label>
                </div>

                <div className='input-wrapper'>
                    <input
                        required={true}
                        type='password'
                        id='password'
                        name='password'
                        value={values.password}
                        onChange={handleChange}
                    />
                    <label htmlFor='password'>
                        <span>{t('signIn.password')}</span>
                    </label>
                </div>

                <button
                    type='submit'
                    className='sign-in__button primary-button'
                >
                    {!isLoading ? (
                        t('signIn.title')
                    ) : (
                        <ClipLoader loading={true} size={35} color='#1a8ccb' />
                    )}
                </button>
                <NavLink to='register' className='sign-in__link'>
                    {t('signIn.link')}
                </NavLink>
            </div>
        </form>
    );
};

export default SignIn;
