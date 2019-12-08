import {connect} from 'react-redux'
import UserService from "../services/UserService";
import Search from "../components/Search.js";

const userService = UserService.getInstance();

const stateToPropertyMapper = (state) => {
    return {
        username: state.username,
        password: state.password,
        firstName: state.firstName,
        lastName: state.lastName,
        userType: state.userType,
        user: state.user,
        venue: state.venue
    }
};

const dispatcherToPropertyMapper = dispatch => {
    return {
        selectVenue: (venue) => {
            dispatch({
                type: 'SELECT_VENUE',
                venue: venue
            })
        },
    }
};

const SearchContainer =
    connect(stateToPropertyMapper,
        dispatcherToPropertyMapper)(Search);

export default SearchContainer;
