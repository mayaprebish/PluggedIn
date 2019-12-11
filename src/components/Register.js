import React from 'react';

import './PluggedIn.css';
import {Link} from "react-router-dom";
import LoggedOutHeader from "./LoggedOutHeader";
import LoggedInHeader from "./LoggedInHeader";

export default class Register extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        this.loadUser();
    }

    loadUser() {
        if (this.props.user !== '') {
            this.props.userLoaded();
        }
    }

    inputEmpty = input => {
        return input.length < 1;
    }

    render() {
        return (
            <div className="register-content">
                {this.props.loggedIn === false &&
                <div className="logged-out-content">
                    <div className="header">
                        <LoggedOutHeader/>
                    </div>

                    <div className="container register-container">
                        <h2>Create your PluggedIn account</h2>
                        <form>
                            <div className="form-group">
                                <label htmlFor="username">Username</label>
                                <input className="form-control" id="username"
                                       placeholder="username"
                                       aria-describedby="username"
                                       onChange={e => {
                                           this.props.changeUsername(e.target.value);
                                       }}
                                />
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
                                <label htmlFor="firstName">First Name</label>
                                <input id="firstName" className="form-control"
                                       placeholder="John"
                                       onChange={e => {
                                           this.props.changeFirstName(e.target.value);
                                       }}/>
                            </div>

                            <div className="form-group">
                                <label htmlFor="lastName">Last Name</label>
                                <input id="lastName" className="form-control"
                                       placeholder="Smith"
                                       onChange={e => {
                                           this.props.changeLastName(e.target.value);
                                       }}/>
                            </div>

                            <div className="form-group">
                                <label htmlFor="userType">Type of User</label>
                                <select id="userType" className="form-control user-select"
                                        onChange={e => {
                                            this.props.changeUserType(e.target.value);
                                        }}>
                                    <option>Tour Manager</option>
                                    <option>Venue Owner</option>
                                </select>
                            </div>

                            <Link to="/profile" className="login-btn">
                                <button type="submit" className="btn btn-primary"
                                        onClick={() => {
                                            let inputs = [this.props.username, this.props.password,
                                                this.props.firstName, this.props.lastName];
                                            console.log("all inputs filled: ", inputs.every(i => !this.inputEmpty(i)));
                                            if (inputs.every(i => this.inputEmpty(i))) {
                                                alert("One or more required fields empty");
                                                console.log("inputs: ",  inputs);
                                            }
                                            else {
                                                this.props.register(this.props.username,
                                                    this.props.password,
                                                    this.props.firstName,
                                                    this.props.lastName,
                                                    this.props.userType)
                                            }
                                        }}>
                                    Sign up
                                </button>
                            </Link>
                            <Link to="/login" className="login-btn">
                                <button className="btn btn-secondary float-right">Log in</button>
                            </Link>
                        </form>
                    </div>
                </div>}

                {this.props.loggedIn === true &&
                <div className="logged-in-content">
                    <div className="header">
                        <LoggedInHeader/>
                    </div>

                    <div className="container register-container">
                        <h5>Hello, {this.props.firstName}!</h5>
                        <Link to='/profile'>Go to your profile</Link>
                        <br/>
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
