import React from 'react';
import {Link} from 'react-router-dom';

import './PluggedIn.css';
import LoggedOutHeader from "./LoggedOutHeader";
import LoggedInHeader from "./LoggedInHeader";

export default class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            location: '',
            genre: ''
        }
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
                                                       this.setState({
                                                           name: e.currentTarget.value
                                                       })
                                                   }}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <input className="form-control" id="location"
                                                   placeholder="Artist location/region"
                                                   onChange={e => {
                                                       this.setState({
                                                           location: e.currentTarget.value
                                                       })
                                                   }}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <input className="form-control" id="genre"
                                                   placeholder="Genre"
                                                   onChange={e => {
                                                       this.setState({
                                                           genre: e.currentTarget.value
                                                       })
                                                   }}
                                            />
                                        </div>
                                    </form>
                                    <button className="btn btn-primary"
                                            onClick={(e) => {
                                                this.props.addArtist(this.props.user.id,
                                                    this.state.name, this.state.location,
                                                    this.state.genre);
                                                e.preventDefault();
                                            }}>
                                        Add to profile
                                    </button>
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
                                                           this.setState({
                                                               name: e.currentTarget.value
                                                           })
                                                       }}
                                                />
                                            </div>
                                            <div className="form-group">
                                                <input className="form-control" id="location"
                                                       placeholder="Artist location/region"
                                                       onChange={e => {
                                                           this.setState({
                                                               location: e.currentTarget.value
                                                           })
                                                       }}
                                                />
                                            </div>
                                            <div className="form-group">
                                                <input className="form-control" id="genre"
                                                       placeholder="Genre"
                                                       onChange={e => {
                                                           this.setState({
                                                               genre: e.currentTarget.value
                                                           })
                                                       }}
                                                />
                                            </div>
                                        </form>
                                        <button className="btn btn-primary"
                                                onClick={(e) => {
                                                    this.props.addArtist(this.props.user.id,
                                                        this.state.name, this.state.location,
                                                        this.state.genre);
                                                    e.preventDefault();
                                                }}>
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

                            {this.props.user.venues && this.props.user.venues.length == 0 &&
                            <ul className="list-group venue-list">
                                <li className="list-group-item">
                                    <h6>Use <Link to="/search">Search </Link>to find Venues to add to your profile!</h6>
                                </li>
                            </ul>
                            }

                            {this.props.user.venues && this.props.user.venues.length !== 0 &&
                            <div>
                                <ul className="list-group venue-list">
                                    {this.props.user.venues.map(venue =>
                                        <li className="list-group-item">
                                            <h4>{venue.name}</h4>
                                            <h6>Location: {venue.location}</h6>
                                            <button className="btn btn-danger"
                                                    onClick={(e) => {
                                                        this.props.deleteVenue(this.props.user.id, venue.id);
                                                        e.preventDefault();
                                                    }}>
                                                Delete from profile
                                            </button>

                                        </li>)}
                                </ul>
                            </div>
                            }

                            <h4>Bookings at your Venues:</h4>

                            {this.props.user.bookings && this.props.user.bookings.length == 0 &&
                            <ul className="list-group venue-list">
                                <li className="list-group-item">
                                    <h6>When a Tour Manager makes a Booking at one of your Venues,
                                        it will be listed here!</h6>
                                </li>
                            </ul>
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
            </div>
        )
    }
}
