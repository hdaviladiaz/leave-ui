import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import App from './components/app/app';
import LeaveDashboard from './components/leave-dashboard/leave-dashboard';
import Auth from './components/auth/auth';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './styles/index.css';

import environment from './conf'

axios.defaults.baseURL = environment().hostUrl;

ReactDOM.render(
    <BrowserRouter >
        <App>
            <Route exact path="/" component={LeaveDashboard} />
            <Route exact path="/auth/:token" component={Auth} />
        </App>
    </BrowserRouter>
    , document.getElementById('root'));
registerServiceWorker();
