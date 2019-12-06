import React from 'react';

import './PluggedIn.css';
import UserService from "../services/UserService";

export default class Profile extends React.Component {
    userService = UserService.getInstance();

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            user: '',
            firstName: '',
            lastName: ''
        }
    }

    componentDidMount() {
        this.loadProfile();
    }

    loadProfile() {

    }

    render() {
        return (
            <div className="container profile-container">
                <h4>Personal Info:</h4>
                <p>Username: admin</p>
                <p>Password: maya</p>
                <p>Location: Boston, MA</p>

                <h4>Manager Info:</h4>
                <p>YOUR TOURS:</p>

                <p>YOUR ARTISTS:</p>

                <p>YOUR FAVORITE VENUES:</p>
            </div>
        )
    }
}
