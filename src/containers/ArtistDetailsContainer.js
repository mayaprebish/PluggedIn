import {connect} from 'react-redux'
import ArtistDetails from "../components/ArtistDetails";

const stateToPropertyMapper = (state) => {
    return {
        username: state.username,
        password: state.password,
        firstName: state.firstName,
        lastName: state.lastName,
        userType: state.userType,
        user: state.user,
        venue: state.venue,
        artist: state.artist,
        loggedIn: state.loggedIn
    }
};

const dispatcherToPropertyMapper = dispatch => {
    return {

    }
};

const ArtistDetailsContainer =
    connect(stateToPropertyMapper,
        dispatcherToPropertyMapper)(ArtistDetails);

export default ArtistDetailsContainer;
