import React from 'react';

export default class SearchList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                {this.props.venues && this.props.venues.length > 0 && this.props.venues.map(venue =>
                    <p onClick={() => this.props.selectVenue(venue.id)}>{venue.venue_name}</p>
                )}
            </div>
        )
    }

}
