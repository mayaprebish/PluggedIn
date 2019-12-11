import {connect} from 'react-redux'
import UserService from "../services/UserService";
import Index from "../components/Index";
import VenueService from "../services/VenueService";
import SearchDetails from "../components/SearchDetails";

const userService = UserService.getInstance();

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
    return {
        logout: (ownerId, name, location) => {
            userService.createVenue(ownerId, name, location)
                .then()
            dispatch({
                type: 'LOGOUT'
            })
        }
    }
};

const SearchDetailsContainer =
    connect(stateToPropertyMapper,
        dispatcherToPropertyMapper)(SearchDetails);

export default SearchDetailsContainer;
