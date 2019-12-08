import React from 'react';

import './PluggedIn.css';
import {Link} from "react-router-dom";

export default class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {
        console.log(this.state.user);
    }

    render() {
        return (
            <div className="container register-form">
                <h2>Create your PluggedIn account</h2>
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

                    <div className="form-group">
                        <label htmlFor="firstname">First Name</label>
                        <input id="firstname" className="form-control"
                               placeholder="John"
                               onChange={e => {
                                   this.props.changeFirstName(e.currentTarget.value);
                               }}/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="lastname">Last Name</label>
                        <input id="lastname" className="form-control"
                               placeholder="Smith"
                               onChange={e => {
                                   this.props.changeLastName(e.currentTarget.value);
                               }}/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="usertype">Type of User</label>
                        <select id="usertype" className="form-control user-select"
                                onChange={e => {
                                    this.props.changeUserType(e.currentTarget.value);
                                }}>
                            <option>Tour Manager</option>
                            <option>Venue Owner</option>
                        </select>
                    </div>

                    <Link to="/profile" className="login-btn">
                        <button type="submit" className="btn btn-primary"
                        onClick={() => {
                            this.props.register(this.state.userType,
                                this.state.password,
                                this.state.firstName,
                                this.state.lastName,
                                this.state.username)
                        }}>
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
