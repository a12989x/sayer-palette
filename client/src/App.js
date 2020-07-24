import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';

import History from './components/History';
import Home from './components/pages/Home';

const App = () => {
    return (
        <div className="App">
            <Router history={History}>
                <Switch>
                    <Route exact path="/" component={Home} />
                </Switch>
            </Router>
        </div>
    );
};

export default App;
