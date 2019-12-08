import React from 'react';

export default class SearchItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <li className="list-group-item">{this.props.venue && this.props.venue.venue_name}</li>
        )
    }
}
