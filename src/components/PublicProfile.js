import React from 'react';
import LoggedOutHeader from "./LoggedOutHeader";
import LoggedInHeader from "./LoggedInHeader";
import UserService from "../services/UserService";

export default class PublicProfile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: ''
        }
    }

    userService = UserService.getInstance();
    userId = this.props.match.params.uid;
    userType = this.props.match.params.uType;

    componentDidMount() {
        console.log(this.userType);
        this.getUser();
    }

    getUser() {
        this.userService.findUserById(this.userId, this.userType)
            .then(user => {
                this.setState({
                    user: user
                });
                console.log(this.state.user);
            });
    }

    render() {
        return (
            <div className="public-profile">

                {this.props.loggedIn === false &&
                <div className="header">
                    <LoggedOutHeader/>
                </div>
                }

                {this.props.loggedIn === true &&
                <div className="header">
                    <LoggedInHeader/>
                </div>
                }

                {this.state.user &&
                <div className="container border profile-content">
                    <h2>{this.state.user.firstName} {this.state.user.lastName}</h2>
                    <h5>{this.state.user.userType}</h5>
                </div>
                }

                {this.state.user && this.state.user.userType === "Tour Manager" &&
                <div className="tm-content container border">
                    <h3>Artists:</h3>
                    <ul>
                        {this.state.user.artists && this.state.user.artists.map(
                            artist =>
                                <li className="list-group-item">
                                    {artist.name}
                                </li>
                        )}
                    </ul>
                </div>
                }

            </div>
        )
    }
}
