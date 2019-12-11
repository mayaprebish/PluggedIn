import React from 'react';
import LoggedOutHeader from "./LoggedOutHeader";
import LoggedInHeader from "./LoggedInHeader";

export default class Index extends React.Component {
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
        return <div className="index-content">
            {this.props.loggedIn === false &&
            <div>
                <div className="header">
                    <LoggedOutHeader/>
                </div>
                <div className="jumbotron">
                    <h1 className="display-4">Welcome to PluggedIn!</h1>
                    <p className="lead">An online resource for tour managers and venue owners</p>
                </div>

                <div className="container-fluid logged-in-content">
                    <div className="container-fluid border instruction-container">
                        <h5>PluggedIn for Tour Managers</h5>
                        <ol>
                            <li>Add Artists to your profile.</li>
                            <li>Add Tours to your profile.</li>
                            <li>Use Search to find Venues, then click on one to make a booking using your existing
                            artists and tours!</li>
                        </ol>
                    </div>

                    <div className="container-fluid border instruction-container">
                        <h5>PluggedIn for Venue Owners</h5>
                        <ol>
                            <li>Use Search to find your Venues, and add them to your profile!</li>
                            <li>Use your Profile to add or edit information about your Venues.</li>
                            <li>When a Tour Manager makes a booking at one of your Venues, it will appear on your
                            profile under Bookings.</li>
                        </ol>
                    </div>
                </div>
            </div>
            }

            {this.props.loggedIn === true &&
            <div>
                <div className="header">
                    <LoggedInHeader/>
                </div>

                <div className="logged-in-content">
                    <div className="container-fluid logged-in-content">
                        <div className="container-fluid border instruction-container">
                            <h5>PluggedIn for Tour Managers</h5>
                            <ol>
                                <li>Add Artists to your profile.</li>
                                <li>Add Tours to your profile.</li>
                                <li>Use Search to find Venues, then click on one to make a booking using your existing
                                    artists and tours!</li>
                            </ol>
                        </div>

                        <div className="container-fluid border instruction-container">
                            <h5>PluggedIn for Venue Owners</h5>
                            <ol>
                                <li>Use Search to find your Venues, and add them to your profile!</li>
                                <li>Use your Profile to add or edit information about your Venues.</li>
                                <li>When a Tour Manager makes a booking at one of your Venues, it will appear on your
                                    profile under Bookings.</li>
                            </ol>
                        </div>
                    </div>

                </div>
            </div>}
        </div>
    }
}
