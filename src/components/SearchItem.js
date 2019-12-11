import React from 'react';

export default class SearchItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <li className="list-group-item">{this.props.venue &&
                <div>
                    <b>{this.props.venue.venue_name}: </b>
                    venue in {this.props.venue.city_name},
                    {this.props.venue.region_name}
                </div>}</li>
        )
    }
}
