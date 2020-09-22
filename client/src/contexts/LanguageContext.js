import React, { useState, createContext, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import cookie from 'react-cookies';

export const LanguageContext = createContext();

const LanguageContextProvider = (props) => {
    const [language, setLanguage] = useState('en');
    const [t, i18n] = useTranslation();

    useEffect(() => {
        const lng = cookie.load('i18next');
        setLanguage(lng);
    }, []);

    const changeLanguage = () => {
        setLanguage(language === 'en' ? 'es' : 'en');
        i18n.changeLanguage(language === 'en' ? 'es' : 'en');
    };

    return (
        <LanguageContext.Provider value={{ t, language, changeLanguage }}>
            {props.children}
        </LanguageContext.Provider>
    );
};

export default LanguageContextProvider;
