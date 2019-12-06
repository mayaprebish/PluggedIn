import React, {Component} from 'react';

export default class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            venues: null,
            venue: ""
        }
    }

    componentDidMount() {
        console.log(this.state.venues);
        this.searchVenues()
            .then(response => {
                this.setState({
                    venues: response.items
                })
            });
        console.log(this.state.venues);
    }

    searchVenues = () =>
        fetch(`https://eventful.com/json/venues/search?app_key=4TTVttfmr3tXFDJr&location=boston`, {
                method: 'GET',
                headers: {
                    'content-type': 'application/json',
                    'Accept': 'application/json',
                    'Access-Control-Allow-Credentials': true,
                    'Access-Control-Allow-Origin': true
                }
            })
            .then(response => response.json());

    render() {
        return (
            <div className="container search-container">
                <h2>Search for Venues</h2>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Search by location or keyword"
                           aria-label="Recipient's username" aria-describedby="button-addon2"/>
                        <div className="input-group-append">
                            <button className="btn btn-outline-secondary" type="button" id="button-addon2">SEARCH
                            </button>
                        </div>
                </div>

                {this.state.venues && this.state.venues.map(venue =>
                    <h6>{venue.venue_name}</h6>)}
            </div>
        )
    }

}
