import {connect} from 'react-redux'
import UserService from "../services/UserService";
import Login from "../components/Login";

const userService = UserService.getInstance();

const stateToPropertyMapper = (state) => {
    return {
        username: state.username,
        password: state.password,
        userType: state.userType,
        user: state.user,
        venue: state.venue,
        firstName: state.firstName,
        lastName: state.lastName,
        loggedIn: state.loggedIn
    }
};

const dispatcherToPropertyMapper = dispatch => ({
    userLoaded: () => {
        dispatch({
            type: 'USER_LOADED'
        })
    },
    logout: () => {
        dispatch({
            type: 'LOGOUT'
        })
    },
    changeUsername: (username) => {
        dispatch({
            type: 'CHANGE_USERNAME',
            username: username
        })
    },
    changePassword: (password) => {
        dispatch({
            type: 'CHANGE_PASSWORD',
            password: password
        })
    },
    login: (username, password) => {
        console.log("logging in");

        userService
            .login(username, password)
            .then(user => {
                if (user == null) {
                    console.log("user not found");
                } else {
                    console.log(user);
                    dispatch({
                        type: 'LOGIN',
                        user: user
                    })
                }
            })
    }
});

const LoginContainer =
    connect(stateToPropertyMapper,
        dispatcherToPropertyMapper)(Login);

export default LoginContainer;
