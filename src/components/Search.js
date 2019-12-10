import React, {Component} from 'react';
import VenueService from "../services/VenueService";
import SearchList from "./SearchList";
import SearchDetails from "./SearchDetails";
import LoggedOutHeader from "./LoggedOutHeader";
import LoggedInHeader from "./LoggedInHeader";
import {Link} from "react-router-dom";

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

    componentDidUpdate(prevProps, prevState, snapshot) {
        this.loadUser();
    }

    loadUser() {
        if (this.props.user !== '') {
            this.props.userLoaded();
        }
    }

    componentDidMount() {
        this.searchVenues();
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
        });


    selectVenue = venueId =>
        this.venueService.getVenue(venueId)
            .then(response => response.json())
            .then(venue => {
                this.setState({
                    venue: venue
                })
            });

    render() {
        return (
            <div className="search-content">
                {this.props.loggedIn === false &&
                <div className="logged-out-content">

                    <div className="header">
                        <LoggedOutHeader/>
                    </div>

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
                                <SearchDetails venue={this.state.venue} loggedIn={this.props.loggedIn}
                                               userType={this.props.userType}/>
                            </div>
                        </div>
                    </div>
                </div>}

                {this.props.loggedIn === true &&
                <div className="logged-in-content">
                    <div className="header">
                        <LoggedInHeader/>
                    </div>

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
                                <SearchDetails venue={this.state.venue} loggedIn={this.props.loggedIn}
                                               userType={this.props.userType}
                                               user={this.props.user}/>

                                {this.state.venue.name !== '' && this.props.loggedIn === true && this.props.userType === 'Tour Manager' &&
                                <div>
                                    <Link to={{
                                        pathname: '/booking',
                                        venue: this.props.venue,
                                        user: this.props.user
                                    }}>
                                        <button className="btn btn-primary">
                                            Book this Venue
                                        </button>
                                    </Link>
                                </div>
                                }
                                {this.state.venue.name !== '' && this.props.loggedIn === true && this.props.userType === 'Venue Owner' &&

                                <button className="btn btn-primary">Add this Venue to my profile</button>
                                }
                            </div>
                        </div>
                    </div>
                </div>
                }
            </div>

        )
    }

}
