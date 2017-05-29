import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import App from './components/app/app';
import Home from './components/home/home';
import MedicalLeave from './components/medicalLeave/medicalLeave';
import Vacation from './components/vacation/vacation';
import registerServiceWorker from './registerServiceWorker';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './styles/index.css';

ReactDOM.render(
    <BrowserRouter >
        <App>
            <Route exact path="/" component={Home} />
            <Route path="/request/vacation" component={Vacation} />
            <Route path="/request/medical-leave" component={MedicalLeave} />
        </App>
    </BrowserRouter>
    , document.getElementById('root'));
registerServiceWorker();
