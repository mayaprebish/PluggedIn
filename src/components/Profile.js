import React from 'react';
import {Link} from 'react-router-dom';

import './PluggedIn.css';

export default class Profile extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container profile-container">
                {this.props.userType === '' &&
                  <div>
                    <h5>Login failed: wrong user credentials</h5>
                      <h5>Please <Link to='/login'>verify credentials </Link>
                          or <Link to='register'>register</Link></h5>
                  </div>}

                {this.props.username !== '' &&
                  this.props.userType !== '' &&
                  <div>
                    <h1>Welcome {this.props.username}!</h1>
                    <br/>

                    <h4>Personal Info:</h4>
                    <p>Username: {this.props.username}</p>
                    <p>Password: {this.props.password}</p>
                    <p>Location: Boston, MA</p>
                  </div>}

                {this.props.userType === "Tour Manager" &&

                  <div>
                    <h4>Manager Info:</h4>
                    <p>YOUR TOURS:</p>

                    <p>YOUR ARTISTS:</p>

                    <p>YOUR FAVORITE VENUES:</p>
                      <button onClick={() => this.props.logout()} className="btn btn-danger">
                          Log Out
                      </button>
                  </div>}

                {this.props.userType === "Venue Owner" &&

                  <div>
                    <h4>Owner Info:</h4>
                    <p>YOUR VENUE:</p>

                    <p>YOUR BOOKINGS:</p>

                  </div>}
            </div>
        )
    }
}
