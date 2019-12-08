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
        user: state.user
    }
};

const dispatcherToPropertyMapper = dispatch => {
    return {}
};

const SearchContainer =
    connect(stateToPropertyMapper,
        dispatcherToPropertyMapper)(Search);

export default SearchContainer;
