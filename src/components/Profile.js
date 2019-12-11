import React from 'react';
import {Link} from 'react-router-dom';

import './PluggedIn.css';
import LoggedOutHeader from "./LoggedOutHeader";
import LoggedInHeader from "./LoggedInHeader";
import ArtistService from "../services/ArtistService";

export default class Profile extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        this.loadUser();
    }

    componentDidMount() {
        this.registerBookings();
    }

    loadUser() {
        if (this.props.user !== '') {
            this.props.userLoaded();
        }
    }

    inputEmpty = input => {
        return input.length < 1;
    }

    registerBookings() {

    }

    render() {
        return (
            <div className="profile-content">
                {this.props.loggedIn === false &&
                <div className='logged-out-content'>
                    <div className="header">
                        <LoggedOutHeader/>
                    </div>

                    <div className="container profile-container">
                        <h5>Please <Link to='/login'>login </Link>
                            or <Link to='register'>register </Link>
                            to view your profile!</h5>
                    </div>
                </div>}

                {this.props.loggedIn === true &&
                <div className='logged-in-content'>
                    <div className="header">
                        <LoggedInHeader/>
                    </div>

                    <div className="container profile-container">
                        <h2>Hello, {this.props.userType + " " + this.props.firstName}!</h2>
                        <br/>
                        {this.props.userType === "Tour Manager" &&
                            <div className="manager-profile">
                            <h4>Your Artists:</h4>

                            {this.props.user.artists && this.props.user.artists.length === 0 &&
                                <div className="artist-list">
                                <li className="list-group-item">
                                <h6>Add new artist:</h6>
                                <form>
                                <div className="form-group">
                                <input className="form-control" id="artist-name"
                                placeholder="Artist name"
                                aria-describedby="artist-name"
                                onChange={e => {
                                    this.props.changeArtistName(e.currentTarget.value);
                                }}
                                />
                                </div>
                                <div className="form-group">
                                <input className="form-control" id="location"
                                placeholder="Artist location/region"
                                onChange={e => {
                                    this.props.changeArtistLocation(e.currentTarget.value);
                                }}
                                />
                                </div>
                                <div className="form-group">
                                <input className="form-control" id="genre"
                                placeholder="Genre"
                                onChange={e => {
                                    this.props.changeArtistGenre(e.currentTarget.value);
                                }}
                                />
                                </div>
                                <button className="btn btn-primary">
                                Add to profile
                                </button>
                                </form>
                                </li>
                                </div>
                            }

                            {this.props.user.artists && this.props.user.artists.length !== 0 &&
                                <div>
                                <ul className="list-group artist-list">
                                {this.props.user.artists.map(artist =>
                                    <li className="list-group-item">
                                        <h4>{artist.name}</h4>
                                        <h6>Location: {artist.location}</h6>
                                        <h6>Genre: {artist.genre}</h6>
                                        <button className="btn btn-danger"
                                                onClick={() => this.props.deleteArtist(this.props.user.id, artist.id)}>
                                            Delete from profile
                                        </button>

                                    </li>)}
                                <li className="list-group-item">
                                <h6>Add new artist:</h6>
                                <form>
                                <div className="form-group">
                                <input className="form-control" id="artist-name"
                                placeholder="Artist name"
                                aria-describedby="artist-name"
                                onChange={e => {
                                    this.props.changeArtistName(e.currentTarget.value);
                                }}
                                />
                                </div>
                                <div className="form-group">
                                <input className="form-control" id="location"
                                placeholder="Artist location/region"
                                onChange={e => {
                                    this.props.changeArtistLocation(e.currentTarget.value);
                                }}
                                />
                                </div>
                                <div className="form-group">
                                <input className="form-control" id="genre"
                                placeholder="Genre"
                                onChange={e => {
                                    this.props.changeArtistGenre(e.currentTarget.value);
                                }}
                                />
                                </div>
                                </form>
                                <button className="btn btn-primary"
                                onClick={() =>
                                this.props.addArtist(this.props.user.id,
                                    this.state.name, this.state.location,
                                    this.state.genre)
                            }>
                                Add to profile
                                </button>
                                </li>
                                </ul>
                                </div>
                            }

                                <h4 className="tours-list">Your Tours:</h4>
                            {this.props.user.tours && this.props.user.tours.length === 0 &&
                                <div className="tours-list">
                                <li className="list-group-item">
                                <h6>Create your first tour!</h6>
                                </li>
                                </div>
                            }

                            {this.props.user.tours && this.props.user.tours.length !== 0 &&
                                <div>
                                <ul className="list-group tours-list">
                                {this.props.user.tours.map(tour =>
                                    <li className="list-group-item">
                                        <h4>{tour.title}</h4>
                                        <br/>
                                        <button className="btn btn-danger">
                                            // onClick={}>
                                            Delete this tour
                                        </button>

                                    </li>)}
                                </ul>
                                </div>
                            }
                                </div>
                        }

                        {this.props.userType === "Venue Owner" &&
                        <div className="owner-profile">
                            <h4>Your Venues:</h4>

                            {this.props.user.venues && this.props.user.venues.length === 0 &&
                            <div className="venue-list">
                                <li className="list-group-item">
                                    <h6>Add new venue:</h6>
                                    <form>
                                        <div className="form-group">
                                            <input className="form-control" id="venue-name"
                                                   placeholder="Venue name"
                                                   aria-describedby="venue-name"
                                                   onChange={e => {
                                                       this.props.changeVenueName(e.currentTarget.value);
                                                   }}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <input className="form-control" id="location"
                                                   placeholder="Venue location"
                                                   onChange={e => {
                                                       this.props.changeVenueLocation(e.currentTarget.value);
                                                   }}
                                            />
                                        </div>
                                        <button className="btn btn-primary"
                                              onClick={e => {e.preventDefault();
                                                              this.props.addVenue(this.props.user.id, this.props.venueName, this.props.venueLocation)}}>
                                            Add to profile
                                        </button>
                                    </form>
                                </li>
                            </div>
                            }

                            {this.props.user.venues && this.props.user.venues.length !== 0 &&
                            <div>
                                <ul className="list-group venue-list">
                                    {this.props.user.venues.map(venue =>
                                        <li className="list-group-item">
                                            <h4>{venue.name}</h4>
                                            <h6>Location: {venue.location}</h6>
                                            <button className="btn btn-danger"
                                                    onClick={() => this.props.deleteVenue(this.props.user.id, venue.id)}>
                                                Delete from profile
                                            </button>

                                        </li>)}
                                    <li className="list-group-item">
                                        <h6>Add new venue:</h6>
                                        <form>
                                            <div className="form-group">
                                                <input className="form-control" id="venue-name"
                                                       placeholder="Venue name"
                                                       aria-describedby="venue-name"
                                                       onChange={e => {
                                                           this.props.changeVenueName(e.currentTarget.value);
                                                       }}
                                                />
                                            </div>
                                            <div className="form-group">
                                                <input className="form-control" id="location"
                                                       placeholder="Venue location"
                                                       onChange={e => {
                                                           this.props.changeVenueLocation(e.currentTarget.value);
                                                       }}
                                                />
                                            </div>
                                        </form>
                                        <button className="btn btn-primary">
                                            Add to profile
                                        </button>
                                    </li>
                                </ul>
                            </div>
                            }

                        </div>
                        }

                        <Link to='/login'>
                            <button onClick={() => this.props.logout()} className="btn btn-danger logout-btn">
                                Log Out
                            </button>
                        </Link>
                    </div>
                </div>
                }

                {/*{this.props.username !== '' &&*/}
                {/*this.props.userType !== '' &&*/}
                {/*<div>*/}
                {/*    <h1>Welcome {this.props.username}!</h1>*/}
                {/*    <br/>*/}

                {/*    <h4>Personal Info:</h4>*/}
                {/*    <p>Username: {this.props.username}</p>*/}
                {/*    <p>Password: {this.props.password}</p>*/}
                {/*    <p>Location: Boston, MA</p>*/}
                {/*</div>}*/}

                {/*{this.props.userType === "Tour Manager" &&*/}

                {/*<div>*/}
                {/*    <h4>Manager Info:</h4>*/}
                {/*    <p>YOUR TOURS:</p>*/}

                {/*    <p>YOUR ARTISTS:</p>*/}

                {/*    <p>YOUR FAVORITE VENUES:</p>*/}
                {/*</div>}*/}

                {/*{this.props.userType === "Venue Owner" &&*/}

                {/*<div>*/}
                {/*    <h4>Owner Info:</h4>*/}
                {/*    <p>YOUR VENUE:</p>*/}

                {/*    <p>YOUR BOOKINGS:</p>*/}

                {/*</div>}*/}
            </div>
        )
    }
}
