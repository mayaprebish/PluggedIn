import React from 'react';
import {Link} from 'react-router-dom';

import './PluggedIn.css';

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            artistId: '',
            tourId: '',
            date: ''
        }
    }

    venueName = this.props.match.params.venueName;
    venueKey = this.props.match.params.venueKey;

    render() {
        return (

            <div className="container">
                <h1>Booking Form</h1>
                <form>

                    <div className="form-group">
                        <label htmlFor="venue">Venue</label>
                        <input id="venue" className="form-control" type="text"
                               placeholder={this.venueName} readOnly/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="artist">Artist</label>
                        <select id="artist" className="form-control"
                                onChange={e => {
                                    this.setState({
                                        artistId: e.currentTarget.value
                                    })
                                }}>
                            <option key={0} value={""}></option>
                            {this.props.user.artists.map(artist =>
                                <option key={artist.id} value={artist.id}>
                                    {artist.name}
                                </option>
                            )}
                        </select>
                    </div>

                    <div className="form-group">
                        <label htmlFor="tour">Tour</label>
                        <select id="tour" className="form-control"
                                onChange={e => {
                                    this.setState({
                                        tourId: e.currentTarget.value
                                    })
                                }}>
                            <option key={0} value={""}></option>
                            {this.props.user.tours.map(tour =>
                                <option key={tour.id} value={tour.id}>
                                    {tour.title}
                                </option>
                            )}
                        </select>
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Date</label>
                        <input type="date" className="form-control" id="date"
                               onChange={e => {
                                   this.setState({
                                       date: e.currentTarget.value
                                   })
                               }}/>
                    </div>
                </form>
                <Link to='/profile'>
                    <button className="btn btn-primary"
                            onClick={() => this.props.createBooking(
                                this.props.user.id, this.state.artistId, this.state.tourId, this.venueKey,
                                this.state.date
                            )}>
                        Submit
                    </button>
                </Link>

                <Link to='/search'>
                    <button className="btn btn-danger">
                        Cancel
                    </button>
                </Link>

            </div>
        )
    }
}
