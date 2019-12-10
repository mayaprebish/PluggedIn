import React from 'react';
import {Link} from 'react-router-dom';

export default class SearchDetails extends React.Component {
    constructor(props) {
        super(props);
        console.log("IN SEARCH DETAILS PROPS ")
        console.log(props);
    }

    render() {
        return (
            <div>
                {this.props.venue.name !== '' &&
                <div className="container wbdv-details">
                    <h3>{this.props.venue.name}</h3>
                    <h4>Venue Type: {this.props.venue.venue_type}</h4>
                    <h6>{this.props.venue.address}</h6>
                    <h6>{this.props.venue.city}</h6>
                    <h6>{this.props.venue.region}</h6>
                    <h6>{this.props.venue.country}</h6>
                </div>

                }

            </div>

        )
    }

}
