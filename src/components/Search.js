import React, {Component} from 'react';
import VenueService from "../services/VenueService";
import SearchList from "./SearchList";

export default class Search extends Component {
    venueService = VenueService.getInstance();

    constructor(props) {
        super(props);
        this.state = {
            venues: '',
            venue: ''
        }
    }

    searchVenues() {
        this.venueService.findVenues()
            .then(response => response.json())
            .then(items => {
                this.setState({
                    venues: items.venues.venue
                });
                console.log(this.state.venues);
            });
    }

    componentDidMount() {
        this.searchVenues();
        console.log(this.state.venues);
    }

    render() {
        return (
            <div className="container search-container">
                <h2>Search for Venues</h2>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Search by location or keyword"
                           aria-label="Recipient's username" aria-describedby="button-addon2"/>
                    <div className="input-group-append">
                        <button className="btn btn-outline-secondary" type="button" id="button-addon2"
                                onClick={() => this.searchVenues()}>SEARCH
                        </button>
                    </div>
                </div>

                <SearchList venues={this.state && this.state.venues && this.state.venues}/>

            </div>
        )
    }

}
