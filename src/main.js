import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import {BrowserRouter as Router, Route, NavLink} from 'react-router-dom';

var Header = require('./components/common/header');
var App = require('./components/app');
var AboutPage = require('./components/aboutPage');

ReactDOM.render(
    <Router>
        <div>
        <nav className="navbar  navbar-expand-lg navbar-dark bg-primary">
            <a className="navbar-brand" href="#">Navbar</a>
            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink activeClassName="active" className="nav-link" to="/">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/about-us">About us</NavLink>
                    </li>
                </ul>
            </div>
        </nav>

        <div>
            <Route exact path="/" component={App}/>
            <Route path="/about-us" component={AboutPage}/>
            <Route path="*" component={Notfound} />
        </div>
        </div>
    </Router>, document.getElementById('app'))
