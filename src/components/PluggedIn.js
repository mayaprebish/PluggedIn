import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import './PluggedIn.css';
import Header from "./Header";

export default class PluggedIn extends React.Component {

    imageUrl = "https://live.staticflickr.com/65535/49124977911_fae20e68a8_o.jpg"

    render() {
        return (
            <Router>
                <div className="header">
                    <Header/>
                </div>

                <div className="content">
                    <img src={this.imageUrl} width="100%"/>

                </div>
            </Router>
        )
    }

}

