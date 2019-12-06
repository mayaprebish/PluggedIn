import React from 'react';
import {Link} from 'react-router-dom';

import './PluggedIn.css';
import UserService from "../services/UserService";

export default class Login extends React.Component {
    userService = UserService.getInstance();

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }

    getUser() {
        //this.userService.findUserByCredentials(this.state.username, this.state.password);
    };

    render() {
        return (
            <div className="container login-form">
                <form>
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input className="form-control" id="username"
                               placeholder="username"
                               aria-describedby="username"
                               onChange={e => {
                                   this.setState({
                                       username: e.currentTarget.value
                                   })
                               }}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control" id="password"
                               placeholder="****"
                               onChange={e => {
                                   this.setState({
                                       password: e.currentTarget.value
                                   })
                               }}/>
                    </div>
                    <Link to="/profile" className="login-btn">
                        <button type="submit" className="btn btn-primary"
                                onClick={() => this.getUser()}>
                            Log In
                        </button>
                    </Link>
                    <Link to="/register" className="login-btn">
                        <button className="btn btn-secondary float-right">Sign Up</button>
                    </Link>
                </form>
            </div>
        )
    }
}
