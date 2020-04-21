import { Switch, Route } from 'react-router-dom';
import React from 'react';

import Home from './Pages/Home/index';
import Feedback from './Pages/Feedback/index';
import About from './Pages/About/index';
import Help from './Pages/Help/index';
import Webtopics from './Pages/topics/webtopics/index';
import Uxtopics from './Pages/topics/uxtopics/index';
import Accesstopics from './Pages/topics/accesstopics/index';
import Libtopics from './Pages/topics/libs/index';
import Html from './Pages/subtopics/html/index';
import Css from './Pages/subtopics/css/index';
import Javascript from './Pages/subtopics/javascript/index';

import Studycontenthtml from './Pages/Content/htmlcontent/study/index';
import Newcontenthtml from './Pages/Content/htmlcontent/news/index';
import Goodcontenthtml from './Pages/Content/htmlcontent/goodpractice/index';
import Bestcontenthtml from './Pages/Content/htmlcontent/bestcontent/index';

import Studycontentcss from './Pages/Content/csscontent/study/index';
import Goodcontentcss from './Pages/Content/csscontent/goodpractice/index';
import Bestcontentcss from './Pages/Content/csscontent/bestcontent/index';

import Studycontentjava from './Pages/Content/javascriptcontent/study/index';
import Goodcontentjava from './Pages/Content/javascriptcontent/goodpractice/index';
import Bestcontentjava from './Pages/Content/javascriptcontent/bestcontent/index'

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
            <Route path="/libtopics" component={Libtopics} />
            <Route path="/html" component={Html} />
            <Route path="/css" component={Css} />
            <Route path="/javascript" component={Javascript} />
            <Route path="/htmlbestcontent" component={Bestcontenthtml} />
            <Route path="/htmlgoodcontent" component={Goodcontenthtml} />
            <Route path="/htmlnews" component={Newcontenthtml} />
            <Route path="/htmlstudy" component={Studycontenthtml} />
            <Route path="/cssbestcontent" component={Bestcontentcss} />
            <Route path="/cssgoodcontent" component={Goodcontentcss} />
            <Route path="/cssstudy" component={Studycontentcss} />
            <Route path="/javabestcontent" component={Bestcontentjava} />
            <Route path="/javagoodcontent" component={Goodcontentjava} />
            <Route path="/javastudy" component={Studycontentjava} />
        </Switch>
    );
}
