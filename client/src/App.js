import React, { useContext } from 'react';
import { Router, Switch, Route } from 'react-router-dom';

import { AuthContext } from './contexts/AuthContext';
import History from './components/History';

import Home from './components/pages/Home';
import Navbar from './components/Navbar';
import Access from './components/pages/Access';
import NoMatch from './components/NoMatch';

const App = () => {
    const { isSignIn } = useContext(AuthContext);

    return (
        <div className="App">
            <Router history={History}>
                <Navbar />
                <Switch>
                    <Route exact path="/access" component={Access} />
                    {isSignIn && (
                        <>
                            <Route exact path="/" component={Home} />
                        </>
                    )}
                    <Route component={NoMatch} />
                </Switch>
            </Router>
        </div>
    );
};

export default App;
