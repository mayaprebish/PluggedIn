import React, {Component} from 'react';

export default class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            venues: null,
            venue: ""
        }
    }

    searchVenues = () =>
        fetch(`http://api.eventful.com/json/venues/search?`)
            .then(response => response.json());

    render() {
        console.log(this.state.venues);
        this.searchVenues()
            .then(response => {
                this.setState({
                    venues: response.items
                })
            });
        console.log(this.state.venues);
        return (
            <div>
                {this.state.venues && this.state.venues.map(venue =>
                    <h6>{venue.title}</h6>)}
            </div>
        )
    }

}
