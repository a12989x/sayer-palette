import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import AuthContextProvider from './contexts/AuthContext';
import LanguageContextProvider from './contexts/LanguageContext';
import NewColorContextProvider from './contexts/NewColorContext';
import './sass/main.scss';
import './components/i18n';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <React.StrictMode>
        <Suspense fallback={<span>Loading...</span>}>
            <LanguageContextProvider>
                <AuthContextProvider>
                    <NewColorContextProvider>
                        <App />
                    </NewColorContextProvider>
                </AuthContextProvider>
            </LanguageContextProvider>
        </Suspense>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
