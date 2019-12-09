import {connect} from 'react-redux'
import UserService from "../services/UserService";
import Profile from "../components/Profile";

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
                type: 'CHANGE_USERNAME',
                lastName: lastName
            })
        },
        changeUserType: (userType) => {
            console.log(userType);
            dispatch({
                type: 'CHANGE_USER_TYPE',
                userType: userType
            })
        },
        // update: (username, password, firstName, lastName, userType) => {
        //     console.log("updating profile");
        //     userService
        //         .updateProfile(username, password, firstName, lastName, userType)
        //         .then(user => {
        //             console.log("got new user");
        //             console.log(user);
        //             dispatch({
        //                 type: 'REGISTER',
        //                 user: user
        //             })
        //         })
        // }
    }
};

const ProfileContainer =
    connect(stateToPropertyMapper,
        dispatcherToPropertyMapper)(Profile);

export default ProfileContainer;
