import React from 'react';

export default class SearchDetails extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                {this.props.venue.name !== '' &&

                // console.log(this.props.venue) &&
                <div className="container wbdv-details">
                    <h3>{this.props.venue.name}</h3>
                    <h4>Venue Type: {this.props.venue.venue_type}</h4>
                    <h6>{this.props.venue.address}</h6>
                    <h6>{this.props.venue.city}</h6>
                    <h6>{this.props.venue.region}</h6>
                    <h6>{this.props.venue.country}</h6>
                </div>
                }
                {this.props.loggedIn === true && this.props.userType === "Tour Manager" &&
                this.props.venue.name !== '' &&
                <button>Add Venue to Favorites</button>
                }
            </div>

        )
    }

}
