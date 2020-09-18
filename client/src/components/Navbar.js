import React, { useState, useEffect, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { RiLogoutCircleLine } from 'react-icons/ri';

import { AuthContext } from '../contexts/AuthContext';
import { LanguageContext } from '../contexts/LanguageContext';

import SayerLogoMini from '../img/Sayer Logo Mini.svg';

const GetColor = () => {
    const { t } = useContext(LanguageContext);

    return (
        <li>
            <NavLink exact to="/get-color">
                {t('navbar.thirdLink')}
            </NavLink>
        </li>
    );
};

const NewColor = () => {
    const { t } = useContext(LanguageContext);

    return (
        <li>
            <NavLink exact to="/new-color">
                {t('navbar.fourthLink')}
            </NavLink>
        </li>
    );
};

const Users = () => {
    const { t } = useContext(LanguageContext);

    return (
        <li>
            <NavLink exact to="/users">
                {t('navbar.fifthLink')}
            </NavLink>
        </li>
    );
};

const Language = () => {
    const { language, changeLanguage } = useContext(LanguageContext);

    return (
        <li className="navbar__change-language">
            <button onClick={() => changeLanguage()}>
                {language === 'en' ? 'EN' : 'ES'}
            </button>
        </li>
    );
};

const Theme = () => {
    const [isDarkTheme, setIsDarkTheme] = useState(false);
    const { t } = useContext(LanguageContext);

    const setRootVariable = (variable, color) =>
        document.documentElement.style.setProperty(variable, color);

    useEffect(() => {
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            console.log('🎉 device on Dark mode');
            setRootVariable('--background-color', '#23262b');
            setRootVariable('--gray-color', '#4f4f4f');
            setRootVariable('--text-color', '#ecf0f3');
            setRootVariable('--dark-shadow-color', '#161616');
            setRootVariable('--light-shadow-color', '#252525');
        }
    }, []);

    const changeTheme = () => {
        setIsDarkTheme(!isDarkTheme);

        if (isDarkTheme) {
            setRootVariable('--background-color', '#23262b');
            setRootVariable('--gray-color', '#4f4f4f');
            setRootVariable('--text-color', '#ecf0f3');
            setRootVariable('--dark-shadow-color', '#161616');
            setRootVariable('--light-shadow-color', '#252525');
        } else {
            setRootVariable('--background-color', '#ecf0f3');
            setRootVariable('--gray-color', '#bdc1c7');
            setRootVariable('--text-color', '#232628');
            setRootVariable('--dark-shadow-color', '#d1d9e6');
            setRootVariable('--light-shadow-color', '#ffffff');
        }
    };

    return (
        <li onClick={changeTheme} className="navbar__theme">
            <button>
                🌓 <span>{t('navbar.sixthLink')}</span>
            </button>
        </li>
    );
};

const SignOut = () => {
    const { signOut } = useContext(AuthContext);
    const { t } = useContext(LanguageContext);

    return (
        <li onClick={signOut}>
            <NavLink exact to="/sign-in" className="navbar__sign-out">
                <RiLogoutCircleLine /> <span>{t('navbar.seventhLink')}</span>
            </NavLink>
        </li>
    );
};

const Navbar = () => {
    const { user, isSignIn } = useContext(AuthContext);
    const { t } = useContext(LanguageContext);

    const roleUser = () => (
        <>
            <div>
                <GetColor />
            </div>
            <div className="navbar__wrapper">
                <Language />
                <Theme />
                <SignOut />
            </div>
        </>
    );

    const roleAdmin = () => (
        <>
            <div>
                <GetColor />
                <NewColor />
            </div>
            <div className="navbar__wrapper">
                <Language />
                <Theme />
                <SignOut />
            </div>
        </>
    );

    const roleSuperAdmin = () => (
        <>
            <div>
                <GetColor />
                <NewColor />
                <Users />
            </div>
            <div className="navbar__wrapper">
                <Language />
                <Theme />
                <SignOut />
            </div>
        </>
    );

    const renderLinks = () => {
        if (user.role === 'user') return roleUser();
        else if (user.role === 'admin') return roleAdmin();
        else if (user.role === 'superadmin') return roleSuperAdmin();
    };

    return (
        <section className="navbar">
            <NavLink to={isSignIn ? '/' : '/sign-in'} className="navbar__link">
                <img src={SayerLogoMini} alt="Sayer Logo Mini" />
                Sayer
            </NavLink>
            <ul>
                {isSignIn ? (
                    renderLinks()
                ) : (
                    <>
                        <div>
                            <li>
                                <NavLink exact to="/sign-in">
                                    {t('navbar.firstLink')}
                                </NavLink>
                            </li>
                            <li>
                                <NavLink exact to="/register">
                                    {t('navbar.secondLink')}
                                </NavLink>
                            </li>
                        </div>
                        <div className="navbar__wrapper">
                            <Language />
                            <Theme />
                        </div>
                    </>
                )}
            </ul>
        </section>
    );
};

export default Navbar;
