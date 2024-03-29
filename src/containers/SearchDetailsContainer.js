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
        addVenue: (ownerId, venueId, name, location) => {
            userService.createVenue(ownerId, venueId, name, location)
                .then(user => {
                    console.log(user);
                    dispatch({
                        type: 'ADD_VENUE',
                        user: user
                    })
                })
        }
    }
};

const SearchDetailsContainer =
    connect(stateToPropertyMapper,
        dispatcherToPropertyMapper)(SearchDetails);

export default SearchDetailsContainer;
