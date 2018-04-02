import React from 'react';
import {NavLink, Switch, Route} from 'react-router-dom';
import HomePage from './homepage'
import About from './aboutPage'
import NotFound from './common/notFoundPage'

class Main extends React.Component {
    render() {
        return (
            <Switch>
                <Route exact path='/' component={HomePage}></Route>
                <Route path='/about-us' component={About}></Route>
                <Route path="*" component={NotFound}></Route>
            </Switch>

        )
    }
};

module.exports = Main;