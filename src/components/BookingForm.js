import React from 'react';
import {Link} from 'react-router-dom';

import './PluggedIn.css';
import LoggedOutHeader from "./LoggedOutHeader";
import LoggedInHeader from "./LoggedInHeader";

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            artist: '',
            tour: '',
            date: ''
        }
    }

    render() {
        return (

          <div className="container">
            <h1>Booking Form</h1>
              <form>

                  <div className="form-group">
                      <label htmlFor="venue">Venue</label>
                      <input id="venue" className="form-control" type="text"
                      placeholder={this.props.location.venue.name} readOnly/>
                  </div>

                  <div className="form-group">
                      <label htmlFor="artist">Artist</label>
                      <select id="artist" className="form-control"
                              onChange={e => {
                                  this.setState({
                                      artist: e.currentTarget.value
                                  })
                              }}>
                     {this.props.location.user.artists.map(artist =>
                                 <option key={artist.id} value={artist.name}>
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
                              tour: e.currentTarget.value
                          })
                      }}>
                          {this.props.location.user.tours.map(tour =>
                              <option key={tour.id} value={tour.title}>
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
              <Link to={{
                  pathname: '/profile',
                  venue: this.props.location.venue,
                  artist: this.state.artist,
                  tour: this.state.tour,
                  date: this.state.date
              }}>
                  <button className="btn btn-primary">
                  Submit
              </button>
              </Link>

            </div>
          )
    }
}
