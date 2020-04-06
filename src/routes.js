import { Switch, Route } from 'react-router-dom';
import React from 'react';

import Home from './Pages/Home/index';
import Feedback from './Pages/Feedback/index';
import About from './Pages/About/index';
import Help from './Pages/Help/index';

export default function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/feedback" component={Feedback} />
            <Route path="/about" component={About} />
            <Route path="/help" component={Help} />
        </Switch>
    );
}
