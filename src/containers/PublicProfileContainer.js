import {connect} from 'react-redux'
import PublicProfile from "../components/PublicProfile";

const stateToPropertyMapper = (state) => {
    return {
        username: state.username,
        password: state.password,
        firstName: state.firstName,
        lastName: state.lastName,
        userType: state.userType,
        user: state.user,
        venue: state.venue,
        loggedIn: state.loggedIn
    }
};

const dispatcherToPropertyMapper = dispatch => {
    return {}
};

const PublicProfileContainer =
    connect(stateToPropertyMapper,
        dispatcherToPropertyMapper)(PublicProfile);

export default PublicProfileContainer;
