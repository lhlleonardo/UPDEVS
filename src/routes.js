import { Switch, Route } from 'react-router-dom';
import React from 'react';

import Home from './Pages/Home/index';
import Feedback from './Pages/Feedback/index';
import About from './Pages/About/index';
import Help from './Pages/Help/index';
import Webtopics from './Pages/topics/webtopics/index';
import Uxtopics from './Pages/topics/uxtopics/index';
import Accesstopics from './Pages/topics/accesstopics/index';

export default function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/feedback" component={Feedback} />
            <Route path="/about" component={About} />
            <Route path="/help" component={Help} />
            <Route path="/webtopics" component={Webtopics} />
            <Route path="/uxtopics" component={Uxtopics} />
            <Route path="/accesstopics" component={Accesstopics} />
        </Switch>
    );
}
