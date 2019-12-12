import React from 'react';
import ArtistService from "../services/ArtistService";
import LoggedOutHeader from "./LoggedOutHeader";
import LoggedInHeader from "./LoggedInHeader";

export default class ArtistDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            artist: ''
        }
    }

    artistService = ArtistService.getInstance();
    artistId = this.props.match.params.aid;

    componentDidMount() {
        this.loadArtist();
    }

    loadArtist() {
        this.artistService.findArtistByID(this.artistId)
            .then(artist => {
                this.setState({
                    artist: artist
                })
            });
    }

    render() {
        return (
            <div className="artist-details">
                {this.props.loggedIn === false &&
                <div className="header">
                    <LoggedOutHeader/>
                </div>
                }

                {this.props.loggedIn === true &&
                <div className="header">
                    <LoggedInHeader/>
                </div>
                }

                <div className="artist-content container border">
                    <h2>Artist Details</h2>
                    {this.state.artist &&
                    <div>
                        <h5>Name: {this.state.artist.name}</h5>
                        <h5>Location: {this.state.artist.location}</h5>
                        <h5>Genre: {this.state.artist.genre}</h5>
                        {console.log(this.state.artist)}
                    </div>
                    }

                    {this.state.artist && this.state.artist.venues &&
                    <div>
                        <h5>Played Venues:</h5>
                        <ul>
                            {this.state.artist.venues.length !== 0 &&
                            this.state.artist.venues.map(venue =>
                            <li>{console.log(venue)}
                                {venue.name}
                            </li>
                            )}
                        </ul>
                    </div>
                    }
                </div>
            </div>
        )
    }
}
