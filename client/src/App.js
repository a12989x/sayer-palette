import React, { useContext } from 'react';
import { Router, Switch, Route } from 'react-router-dom';

import { AuthContext } from './contexts/AuthContext';
import History from './components/History';

import Navbar from './components/Navbar';
import SignIn from './components/pages/SignIn';
import Register from './components/pages/Register';
import GetColor from './components/pages/GetColor';
import NewColor from './components/pages/NewColor';
import Users from './components/pages/Users';
import ModalIdleTimer from './components/ModalIdleTimer';

const App = () => {
    const { user, isSignIn } = useContext(AuthContext);

    const roleUser = () => (
        <>
            <Route exact path='/' component={GetColor} />
        </>
    );

    const roleAdmin = () => (
        <>
            <Route exact path='/' component={GetColor} />
            <Route exact path='/new-color' component={NewColor} />
        </>
    );
    const roleSuperAdmin = () => (
        <>
            <Route exact path='/' component={GetColor} />
            <Route exact path='/new-color' component={NewColor} />
            <Route exact path='/users' component={Users} />
        </>
    );

    const renderPages = () => {
        if (user.role === 'user') return roleUser();
        else if (user.role === 'admin') return roleAdmin();
        else if (user.role === 'superadmin') return roleSuperAdmin();
    };

    return (
        <div className='App'>
            <Router history={History}>
                <Navbar />
                <Switch>
                    {!isSignIn ? (
                        <>
                            <Route exact path='/sign-in' component={SignIn} />
                            <Route
                                exact
                                path='/register'
                                component={Register}
                            />
                        </>
                    ) : (
                        <>
                            {renderPages()}
                            <ModalIdleTimer />
                        </>
                    )}
                </Switch>
            </Router>
        </div>
    );
};

export default App;
