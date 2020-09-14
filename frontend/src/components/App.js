import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, BrowserRouter, Route, Switch } from "react-router-dom";
import { AuthProvider } from '../utils/userContext';

import regeneratorRuntime from "regenerator-runtime";
import "regenerator-runtime/runtime";

import LandingPage from './layouts/landing';
import UserPage from '../components/user/user';
import PrivateRoute from '../routes/PrivateRoutes';
import NonEditProfile from './user/nonEditProfile';
const App = () => {
    return (
        <AuthProvider>
            <Router>
                <PrivateRoute path="/" component={UserPage} />
                <LandingPage />
            </Router>
        </AuthProvider>
    );
};

ReactDOM.render(<App />, document.getElementById('app'));