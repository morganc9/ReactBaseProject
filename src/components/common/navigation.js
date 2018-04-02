import React from 'react';
import {NavLink} from 'react-router-dom';

var navStyle = {"backgroundColor":"#77baec"};

class Navigation extends React.Component {
    render() {
        return (
            <nav className="navbar-expand-lg navbar-light navbar-fixed-top" style={navStyle}>
                <div className="container">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link" to='/'>Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to='/about-us'>About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to='/contact'>Contact</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
};

module.exports = Navigation;