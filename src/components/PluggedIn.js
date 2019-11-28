import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import './PluggedIn.css';
import Header from "./Header";

export default class PluggedIn extends React.Component {
    render() {
        return (
            <Router>
                <div className="content">
                    <div className="header">
                        <Header/>
                    </div>

                    <div className="jumbotron">
                        <h1 className="display-4">Welcome to PluggedIn!</h1>
                        <p className="lead">A resource for artists and tour managers to find venues</p>

                    </div>
                </div>
            </Router>
        )
    }

}

