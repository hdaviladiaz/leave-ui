import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './components/app/app';
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
        </App>
    </BrowserRouter>
    , document.getElementById('root'));
registerServiceWorker();
