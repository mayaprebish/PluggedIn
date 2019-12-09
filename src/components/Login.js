import React from 'react';
import {Link} from 'react-router-dom';

import './PluggedIn.css';

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          username: '',
          password: '',
          userType: ''

        }
    }

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
                                onClick={() => this.props.login(this.props.username, this.props.password, this.props.userType)}>
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
