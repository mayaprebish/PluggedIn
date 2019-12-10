import React from 'react';
import {Link} from 'react-router-dom';

import './PluggedIn.css';
import LoggedOutHeader from "./LoggedOutHeader";
import LoggedInHeader from "./LoggedInHeader";

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        console.log("IN BOOKING FORM")
        console.log(props)
    }

    render() {
        return (

          <div className="container">
            <h1>Booking Form</h1>


              <form>

                  <div className="form-group">
                      <label htmlFor="username">Venue</label>
                      <input className="form-control" type="text"
                      placeholder={this.props.location.venue.name} readOnly/>
                  </div>

                  <div className="form-group">
                      <label htmlFor="username">Artist</label>
                      <select className="form-control">
                     {
                         this.props.location.artists.map(artist =>

                                 <option key={artist.id} value={artist.name}>
                                     {artist.name}
                                 </option>

                         )
                     }
                     </select>
                  </div>


                  <div className="form-group">
                      <label htmlFor="password">Date</label>
                      <input type="date" className="form-control" id="date"/>
                  </div>

                  <button type="submit" className="btn btn-primary"
                          onClick={() => {
                              console.log(this.props.username + ", " + this.props.password);
                              this.props.login(this.props.username, this.props.password)
                          }}>
                      Submit
                  </button>

              </form>

            </div>


          )
    }
}
