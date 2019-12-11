import React from 'react';
import SearchItem from "./SearchItem";
import {Link} from "react-router-dom";

export default class SearchList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                {this.props.venues && this.props.venues.length > 0 && this.props.venues.map(venue =>
                    <Link to={{
                        pathname: `/search/${venue.id}`,
                        loggedIn: this.props.loggedIn,
                        userType: this.props.userType
                    }}>
                    <ul className="list-group" onClick={() => this.props.selectVenue(venue.id)}>
                        <SearchItem venue={venue}></SearchItem>
                    </ul>
                    </Link>
                )}
            </div>
        )
    }

}
