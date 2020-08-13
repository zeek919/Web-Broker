import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from '../../components/Login/Login';
import NotFoundPage from "../../components/NotFoundPage/NotFoundPage";
import GlobalStyle from './GlobalStyle';

const Root = () => (
    <Router>
        <GlobalStyle />
        <Switch>
            <Route exact path="/" component={Login} />
            <Route component={NotFoundPage} />
        </Switch>
    </Router>
);
export default Root;
