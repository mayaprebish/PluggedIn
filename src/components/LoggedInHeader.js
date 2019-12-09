import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import './PluggedIn.css';

export default class LoggedInHeader extends React.Component {
    render() {
        return (
            <div>

                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <Link to="/" className="navbar-brand">
                        <i className="fa fa-plug"/>
                        PluggedIn
                    </Link>

                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/profile" className="nav-link navbar-profile">
                                Profile
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link to="/search" className="nav-link navbar-search">
                                Search
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }

}
