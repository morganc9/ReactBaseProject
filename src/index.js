import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import $ from 'jquery';
import {BrowserRouter} from 'react-router-dom';

ReactDOM.render((
    <BrowserRouter>
        <App/>
    </BrowserRouter>
), document.getElementById('app'));
