import {connect} from 'react-redux'
import UserService from "../services/UserService";
import Register from "../components/Register";

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
        changeFirstName: (firstName) => {
            dispatch({
                type: 'CHANGE_FIRST_NAME',
                firstName: firstName
            })
        },
        changeLastName: (lastName) => {
            dispatch({
                type: 'CHANGE_LAST_NAME',
                lastName: lastName
            })
        },
        changeUserType: (userType) => {
            dispatch({
                type: 'CHANGE_USER_TYPE',
                userType: userType
            })
        },
        register: (username, password, firstName, lastName, userType) => {
            console.log("signing up");
            console.log(username);
            console.log(password);
            console.log(firstName);
            console.log(lastName);
            console.log(userType);

            userService
                .register(username, password, firstName, lastName, userType)
                .then(user => {
                    console.log("got new user");
                    console.log(user);
                    dispatch({
                        type: 'REGISTER',
                        user: user
                    })
                })
        }
    }
};

const RegisterContainer =
    connect(stateToPropertyMapper,
        dispatcherToPropertyMapper)(Register);

export default RegisterContainer;
