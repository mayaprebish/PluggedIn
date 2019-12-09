import {connect} from 'react-redux'
import UserService from "../services/UserService";
import Index from "../components/Index";

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
    return {}
};

const IndexContainer =
    connect(stateToPropertyMapper,
        dispatcherToPropertyMapper)(Index);

export default IndexContainer;
