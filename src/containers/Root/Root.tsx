import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from '../../components/Login/Login';
import GlobalStyle from './GlobalStyle';

const Root = () => (
    <Router>
        <GlobalStyle />
        <Switch>
            <Route exact path="/">
                <Login />
            </Route>
        </Switch>
    </Router>
);
export default Root;
