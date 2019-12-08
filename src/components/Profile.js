import React from 'react';

import './PluggedIn.css';
import UserService from "../services/UserService";

export default class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {
        this.loadProfile();
        console.log(this.state);
    }

    loadProfile() {
        this.props.load();
    }

    render() {
        return (
            <div className="container profile-container">
                <h4>Personal Info:</h4>
                <p>Username: {this.state.username}</p>
                <p>Password: {this.state.password}</p>
                <p>Location: Boston, MA</p>

                <h4>Manager Info:</h4>
                <p>YOUR TOURS:</p>

                <p>YOUR ARTISTS:</p>

                <p>YOUR FAVORITE VENUES:</p>
            </div>
        )
    }
}
