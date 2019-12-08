import React from 'react';
import SearchItem from "./SearchItem";

export default class SearchList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                {this.props.venues && this.props.venues.length > 0 && this.props.venues.map(venue =>
                    <ul className="list-group" onClick={() => this.props.selectVenue(venue.id)}>
                        <SearchItem venue={venue}></SearchItem>
                    </ul>
                )}
            </div>
        )
    }

}
