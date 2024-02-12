// src/AppRouter.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import DashboardPage from './components/DashboardPage';
import TablePage from './components/TablePage';

const AppRouter = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={DashboardPage} />
                <Route exact path="/table" component={TablePage} />
            </Switch>
        </Router>
    );
}

