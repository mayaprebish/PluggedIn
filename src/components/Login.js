import React from 'react';
import {Link} from 'react-router-dom';

import './PluggedIn.css';
import LoggedOutHeader from "./LoggedOutHeader";
import LoggedInHeader from "./LoggedInHeader";

export default class Login extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        this.loadUser();
    }

    loadUser () {
        if (this.props.user !== '') {
            this.props.userLoaded();
        }
    }

    render() {
        return (
            <div className="login-content">
                {this.props.loggedIn === false &&
                <div className="logged-out-content">
                    <div className="header">
                        <LoggedOutHeader/>
                    </div>

                    <div className="container login-form">
                        <form>
                            <div className="form-group">
                                <label htmlFor="username">Username</label>
                                <input className="form-control" id="username"
                                       placeholder="username"
                                       aria-describedby="username"
                                       onChange={e => {
                                           this.props.changeUsername(e.currentTarget.value);
                                       }}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input type="password" className="form-control" id="password"
                                       placeholder="****"
                                       onChange={e => {
                                           this.props.changePassword(e.currentTarget.value);
                                       }}/>
                            </div>
                            <Link to="/profile" className="login-btn">
                                <button type="submit" className="btn btn-primary"
                                        onClick={() => {
                                            console.log(this.props.username + ", " + this.props.password);
                                            this.props.login(this.props.username, this.props.password)
                                        }}>
                                    Log In
                                </button>
                            </Link>

                            <Link to="/register" className="login-btn">
                                <button className="btn btn-secondary float-right">Sign Up</button>
                            </Link>
                        </form>
                    </div>
                </div>}

                {this.props.loggedIn === true &&
                <div className="logged-in-content">
                    <div className="header">
                        <LoggedInHeader/>
                    </div>

                    <div className="logged-in-message">
                        <h5>Hi, {this.props.firstName}!</h5>
                        <Link to='/profile'>Go to your profile.</Link>
                        <Link to='/login'>
                            <button className="btn btn-danger"
                                onClick={() => this.props.logout()}>
                                Log Out
                            </button>
                        </Link>
                    </div>
                </div>}
            </div>
        )
    }
}
