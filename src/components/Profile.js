import React from 'react';
import {Link} from 'react-router-dom';

import './PluggedIn.css';
import LoggedOutHeader from "./LoggedOutHeader";
import LoggedInHeader from "./LoggedInHeader";

export default class Profile extends React.Component {
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

    render() {
        return (
            <div className="profile-content">
                {this.props.loggedIn === false &&
                <div className='logged-out-content'>
                    <div className="header">
                        <LoggedOutHeader/>
                    </div>

                    <div className="container profile-container">
                        <h5>Please <Link to='/login'>login </Link>
                            or <Link to='register'>register </Link>
                            to view your profile!</h5>
                    </div>
                </div>}

                {this.props.loggedIn === true &&
                <div className='logged-in-content'>
                    <div className="header">
                        <LoggedInHeader/>
                    </div>

                    <div className="container profile-container">
                        <h3>Hello, {this.props.firstName}!</h3>
                        <Link to='/login'>
                            <button onClick={() => this.props.logout()} className="btn btn-danger">
                                Log Out
                            </button>
                        </Link>
                    </div>
                </div>
                }

                {/*{this.props.username !== '' &&*/}
                {/*this.props.userType !== '' &&*/}
                {/*<div>*/}
                {/*    <h1>Welcome {this.props.username}!</h1>*/}
                {/*    <br/>*/}

                {/*    <h4>Personal Info:</h4>*/}
                {/*    <p>Username: {this.props.username}</p>*/}
                {/*    <p>Password: {this.props.password}</p>*/}
                {/*    <p>Location: Boston, MA</p>*/}
                {/*</div>}*/}

                {/*{this.props.userType === "Tour Manager" &&*/}

                {/*<div>*/}
                {/*    <h4>Manager Info:</h4>*/}
                {/*    <p>YOUR TOURS:</p>*/}

                {/*    <p>YOUR ARTISTS:</p>*/}

                {/*    <p>YOUR FAVORITE VENUES:</p>*/}
                {/*</div>}*/}

                {/*{this.props.userType === "Venue Owner" &&*/}

                {/*<div>*/}
                {/*    <h4>Owner Info:</h4>*/}
                {/*    <p>YOUR VENUE:</p>*/}

                {/*    <p>YOUR BOOKINGS:</p>*/}

                {/*</div>}*/}
            </div>
        )
    }
}
