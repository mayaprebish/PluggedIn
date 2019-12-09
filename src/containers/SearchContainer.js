import {connect} from 'react-redux'
import UserService from "../services/UserService";
import Search from "../components/Search";

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
        userLoaded: () => {
            dispatch({
                type: 'USER_LOADED'
            })
        },
        logout: () => {
            dispatch({
                type: 'LOGOUT'
            })
        }
    }
};

const SearchContainer =
    connect(stateToPropertyMapper,
        dispatcherToPropertyMapper)(Search);

export default SearchContainer;
