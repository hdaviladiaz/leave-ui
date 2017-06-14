import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import App from './components/app/app';
import Home from './components/home/home';
import Auth from './components/auth/auth';
import registerServiceWorker from './registerServiceWorker';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './styles/index.css';

ReactDOM.render(
    <BrowserRouter >
        <App>
            <Route exact path="/" component={Home} />
            <Route exact path="/auth/:token" component={Auth} />
        </App>
    </BrowserRouter>
    , document.getElementById('root'));
registerServiceWorker();
