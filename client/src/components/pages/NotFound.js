import React from 'react';
import { NavLink } from 'react-router-dom';

const NoMatch = () => {
    return (
        <main className="not-found">
            <div className="container">
                <p>Oops!</p>
                <h1>404 - Page not found</h1>
                <h3>
                    The page you are looking for might have been removed had its
                    name changed or is temporarily unavailable
                </h3>
                <NavLink to="/sign-in">
                    <button className="primary-button">
                        Go to Sign In Page
                    </button>
                </NavLink>
            </div>
        </main>
    );
};

export default NoMatch;
