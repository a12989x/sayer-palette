import React, { useState, useEffect, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { RiLogoutCircleLine } from 'react-icons/ri';

import { AuthContext } from '../contexts/AuthContext';

import SayerLogoMini from '../img/Sayer Logo Mini.svg';

const GetColor = () => (
    <li>
        <NavLink exact to="/get-color">
            Get Color
        </NavLink>
    </li>
);

const NewColor = () => (
    <li>
        <NavLink exact to="/new-color">
            New Color
        </NavLink>
    </li>
);

const Users = () => (
    <li>
        <NavLink exact to="/users">
            Users
        </NavLink>
    </li>
);

const Theme = () => {
    const [isDarkTheme, setIsDarkTheme] = useState(false);

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
                🌓 <span>Theme</span>
            </button>
        </li>
    );
};

const SignOut = () => {
    const { setIsSignIn } = useContext(AuthContext);

    return (
        <li onClick={() => setIsSignIn(false)}>
            <NavLink exact to="/login" className="navbar__sign-out">
                <RiLogoutCircleLine /> <span>Sign Out</span>
            </NavLink>
        </li>
    );
};

const Navbar = () => {
    const { user, isSignIn } = useContext(AuthContext);

    const roleUser = () => (
        <>
            <div>
                <GetColor />
            </div>
            <div className="navbar__wrapper">
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
                                    Sign In
                                </NavLink>
                            </li>
                            <li>
                                <NavLink exact to="/register">
                                    Register
                                </NavLink>
                            </li>
                        </div>
                        <div className="navbar__wrapper">
                            <Theme />
                        </div>
                    </>
                )}
            </ul>
        </section>
    );
};

export default Navbar;
