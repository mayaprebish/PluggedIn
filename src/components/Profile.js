import React from 'react';

import './PluggedIn.css';

export default class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
        console.log("IN PROFILE PROPS");
        console.log(props);
    }

    

    render() {
        return (
            <div className="container profile-container">

                {
                  this.props.username !== '' &&
                  <div>
                    <h1>Welcome {this.props.username}!</h1>
                    <br/>
                  </div>
                }

                <h4>Personal Info:</h4>
                <p>Username: {this.props.username}</p>
                <p>Password: {this.props.password}</p>
                <p>Location: Boston, MA</p>

                { this.props.userType === "Tour Manager" &&

                  <div>
                    <h4>Manager Info:</h4>
                    <p>YOUR TOURS:</p>

                    <p>YOUR ARTISTS:</p>

                    <p>YOUR FAVORITE VENUES:</p>
                  </div>
                }

                { this.props.userType === "Venue Owner" &&

                  <div>
                    <h4>Owner Info:</h4>
                    <p>YOUR TOURS:</p>

                    <p>YOUR ARTISTS:</p>

                    <p>YOUR FAVORITE VENUES:</p>
                  </div>
                }
            </div>
        )
    }
}
