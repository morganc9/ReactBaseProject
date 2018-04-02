"use strict";

var React = require('react');
var { BrowserRouter, Route } = require('react-router-dom')

var routes = (
    // <Route name="app" path="/" component={require('./components/app')}>
    //     <Route name="about-us" component={require('./components/aboutPage')}/>
    // </Route>
<BrowserRouter>
<div>
          <Route path="/" component={require('./components/app')}/>
          <Route path="/about" component={require('./components/aboutPage')}/>
          </div>
     </BrowserRouter>
);

module.exports = routes;