import {connect} from 'react-redux'
import VenueDetails from "../components/VenueDetails";

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

const VenueDetailsContainer =
    connect(stateToPropertyMapper,
        dispatcherToPropertyMapper)(VenueDetails);

export default VenueDetailsContainer;
