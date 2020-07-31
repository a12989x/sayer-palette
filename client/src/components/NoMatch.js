import React from 'react';
import { NavLink } from 'react-router-dom';

const NoMatch = () => {
    return (
        <div className="no-match">
            <p>Oops!</p>
            <h1>404 - Page not found</h1>
            <h3>
                The page you are looking for might have been removed had its
                name changed or is temporarily unavailable
            </h3>
            <NavLink to="/access">
                <button>Go to Access Page</button>
            </NavLink>
        </div>
    );
};

export default NoMatch;
