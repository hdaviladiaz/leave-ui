import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';


import App from './components/app/app';
import RequestVacation from './components/requestVacation/requestVacation';
import MyRequest from './components/myRequest/myRequest';
import registerServiceWorker from './registerServiceWorker';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './styles/index.css';

ReactDOM.render(
    <BrowserRouter >
        <App>
            <Route exact path="/" component={MyRequest} />
            <Route path="/requestVacation" component={RequestVacation} />
            <Route path="/myRequest" component={MyRequest} />
        </App>
    </BrowserRouter>
    , document.getElementById('root'));
registerServiceWorker();
