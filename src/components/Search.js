import React, {Component} from 'react';
import VenueService from "../services/VenueService";
import SearchList from "./SearchList";
import SearchDetails from "./SearchDetails";

export default class Search extends Component {
    venueService = VenueService.getInstance();

    constructor(props) {
        super(props);
        this.state = {
            venues: '',
            venue: {
              name: ''
            },
            searchTitle: 'magnolia'
        }
    }

    componentDidMount() {
        this.searchVenues();
        console.log(this.state.venues);
    }

    searchVenues() {
        this.venueService.findVenues(this.state.searchTitle)
            .then(response => response.json())
            .then(items => {
                this.setState({
                    venues: items.venues.venue
                });
                console.log(this.state.venues);
            });
    }

    searchTitleChanged = event =>
        this.setState({
            searchTitle: event.target.value
        })


    selectVenue = venueId =>
        this.venueService.getVenue(venueId)
        .then(response => response.json())
        .then(venue =>
            this.setState({
              venue: venue
            }))



    render() {
        return (
            <div className="container search-container">
                <h2>Search for Venues</h2>
                <div className="input-group mb-3">
                    <input onChange={this.searchTitleChanged}
                          value={this.state.searchTitle}
                          type="text"
                          className="form-control"
                          placeholder="Search by location or keyword"
                           aria-label="Recipient's username" aria-describedby="button-addon2"/>
                    <div className="input-group-append">
                        <button className="btn btn-outline-secondary" type="button" id="button-addon2"
                                onClick={() => this.searchVenues()}>SEARCH
                        </button>
                    </div>
                </div>

                <div className="row">
                  <div className="col-6 wbdv-venue-list">
                    <SearchList
                    venues={this.state && this.state.venues && this.state.venues}
                    selectVenue={this.selectVenue}/>
                  </div>

                  <div className='col-6 wbdv-venue-details'>
                    <SearchDetails venue={this.state.venue}/>
                  </div>
                </div>



            </div>
        )
    }

}
