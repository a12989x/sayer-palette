import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import AuthContextProvider from './contexts/AuthContext';
import NewColorContextProvider from './contexts/NewColorContext';
import './sass/main.scss';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <React.StrictMode>
        <AuthContextProvider>
            <NewColorContextProvider>
                <App />
            </NewColorContextProvider>
        </AuthContextProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
