import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';

import { AuthContext } from '../contexts/AuthContext';

const Navbar = () => {
    const { isSignIn, setIsSignIn } = useContext(AuthContext);

    return (
        <div>
            <NavLink to={isSignIn ? '/' : '/access'}>Home</NavLink>
            <ul>
                {isSignIn && (
                    <>
                        <li>
                            <NavLink
                                exact
                                to="/access"
                                onClick={() => setIsSignIn(false)}
                            >
                                Sign Out
                            </NavLink>
                        </li>
                        <li>
                            <NavLink exact to="/new">
                                New
                            </NavLink>
                        </li>
                    </>
                )}
            </ul>
        </div>
    );
};

export default Navbar;
