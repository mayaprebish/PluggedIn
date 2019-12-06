import React from 'react';

import './PluggedIn.css';
import {Link} from "react-router-dom";

export default class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }

    render() {
        return (
            <div className="container register-form">
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
                    <div className="form-group">
                        <label htmlFor="vpassword">Confirm Password</label>
                        <input type="password" className="form-control" id="vpassword"
                               placeholder="****"
                               onChange={e => {
                                   this.setState({
                                       password: e.currentTarget.value
                                   })
                               }}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="usertype">Type of User</label>
                        <select id="usertype" className="form-control user-select">
                            <option>Tour Manager</option>
                            <option>Venue Owner</option>
                        </select>
                    </div>

                    <Link to="/profile" className="login-btn">
                        <button type="submit" className="btn btn-primary">
                            {//onClick={() => this.getUser()}>
                            }
                            Sign up
                        </button>
                    </Link>
                    <Link to="/login" className="login-btn">
                        <button className="btn btn-secondary float-right">Log in</button>
                    </Link>
                </form>
            </div>
        )
    }
}
