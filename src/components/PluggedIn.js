import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import './PluggedIn.css';
import Header from "./Header";
import Search from "./Search";
import Login from "./Login";
import Index from "./Index";
import Register from "./Register";
import Profile from "./Profile";

export default class PluggedIn extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            user: ''
        }
    }

    render() {
        return (
            <Router>
                <div className="content">
                    <div className="header">
                        <Header/>
                    </div>

                    <div className="content">
                        <Route exact path="/" component={Index}/>
                        <Route path="/login" component={Login}/>
                        <Route path="/register" component={Register}/>
                        <Route path="/profile" component={Profile}/>
                        <Route path="/search" component={Search}/>
                    </div>
                </div>
            </Router>
        )
    }

}

