import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';

import History from './components/History';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Access from './components/pages/Access';

const App = () => {
    return (
        <div className="App">
            <Router history={History}>
                <Navbar />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/access" component={Access} />
                </Switch>
            </Router>
        </div>
    );
};

export default App;
