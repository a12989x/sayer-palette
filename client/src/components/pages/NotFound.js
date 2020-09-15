import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';

import { LanguageContext } from '../../contexts/LanguageContext';

const NoMatch = () => {
    const { t } = useContext(LanguageContext);

    return (
        <main className="not-found">
            <div className="container">
                <p>Oops!</p>
                <h1>404 - {t('notFound.heading')}</h1>
                <h3>{t('notFound.description')}</h3>
                <NavLink to="/sign-in">
                    <button className="primary-button">
                        {t('notFound.button')}
                    </button>
                </NavLink>
            </div>
        </main>
    );
};

export default NoMatch;
