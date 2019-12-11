import React from 'react';
import {Link} from 'react-router-dom';
import VenueService from "../services/VenueService";
import LoggedInHeader from "./LoggedInHeader";
import LoggedOutHeader from "./LoggedOutHeader";

export default class SearchDetails extends React.Component {
    venueService = VenueService.getInstance();

    constructor(props) {
        super(props);
        console.log("IN SEARCH DETAILS PROPS ")
        console.log(props);
        this.state = {
            venueId: '',
            venue: ''
        }
    }

    venueId = this.props.match.params.vid;

    getVenue() {
        this.venueService.getVenue(this.venueId)
            .then(venue => {
                this.setState({
                    venue: venue
                })
            });

        console.log(this.state.venue)
    }

    componentDidMount() {
        this.getVenue();
    }

    render() {
        return (
            <div>
                {this.props.loggedIn === true && this.props.userType == 'Tour Manager' &&
                <div className="tm-content">
                    <div className="header">
                        <LoggedInHeader/>
                    </div>


                </div>

                }

                {this.props.loggedIn === true && this.props.userType == 'Venue Owner' &&
                <div className="vo-content">
                    <div className="header">
                        <LoggedInHeader/>
                    </div>


                </div>

                }

                {!this.props.loggedIn &&
                <div className="logged-out-content">
                    <div className="header">
                        <LoggedOutHeader/>
                    </div>

                </div>
                }

                {this.state.venue && this.state.venue.name !== '' &&
                <div className="container-fluid wbdv-details">
                    <h2>Venue Details</h2>
                    <div className="container-fluid border">
                        <h3>{this.state.venue.name}</h3>
                        <h4>Venue Type: "{this.state.venue.venue_type}"</h4>
                        <h5>Address:</h5>
                        <h6>{this.state.venue.address}</h6>
                        <h6>{this.state.venue.city}</h6>
                        <h6>{this.state.venue.region}</h6>
                        <h6>{this.state.venue.country}</h6>
                    </div>
                </div>
                }

                {this.props.loggedIn === true && this.props.userType === "Tour Manager" &&
                <div className="container-fluid wbdv-details">
                    <Link to="/booking">
                        <button className="btn btn-secondary btn-lg add-btn">Book this venue</button>
                    </Link>
                </div>
                }

                {this.props.loggedIn === true && this.props.userType === "Venue Owner" &&
                <div className="container-fluid wbdv-details">
                    <Link to="/profile"
                    onClick={() => this.props.addVenue(this.props.user.id, this.state.venue.id,
                        this.state.venue.venue_name, this.state.venue.region)}>
                        <button className="btn btn-secondary btn-lg add-btn">Add this Venue to my Profile</button>
                    </Link>
                </div>}

            </div>

        )
    }

}
