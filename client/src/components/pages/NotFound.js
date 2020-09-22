import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';

import { LanguageContext } from '../../contexts/LanguageContext';
import { AuthContext } from '../../contexts/AuthContext';

const NoMatch = () => {
    const { t } = useContext(LanguageContext);
    const { isSignIn } = useContext(AuthContext);

    return (
        <main className="not-found">
            <div className="container">
                <p>Oops!</p>
                <h1>404 - {t('notFound.heading')}</h1>
                <h3>{t('notFound.description')}</h3>
                <NavLink to={!isSignIn ? '/sign-in' : '/get-color'}>
                    <button className="primary-button">
                        {t('notFound.button')}
                    </button>
                </NavLink>
            </div>
        </main>
    );
};

export default NoMatch;
