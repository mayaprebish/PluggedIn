import {connect} from 'react-redux'
import UserService from "../services/UserService";
import Profile from "../components/Profile";
import ArtistService from "../services/ArtistService";

const userService = UserService.getInstance();
const artistService = ArtistService.getInstance();

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
        addArtist: (mid, name, location, genre) => {
            userService.createArtist(mid, name, location, genre)
                .then(user => {
                    console.log(user);
                    dispatch({
                        type: 'ADD_ARTIST',
                        user: user
                    })
                })
        },
        deleteArtist: (mid, aid) => {
            userService.deleteArtist(mid, aid)
                .then(user => {
                    console.log(user);
                    dispatch({
                        type: 'DELETE_ARTIST',
                        user: user
                    })
                })
        },
        addVenue: (oid, name, location) => {
            userService.createVenue(oid, name, location)
                .then(user => {
                    console.log(user);
                    dispatch({
                        type: 'ADD_VENUE',
                        user: user
                    })
                })
        },
        deleteVenue: (oid, vid) => {
            userService.deleteArtist(oid, vid)
                .then(user => {
                    console.log(user);
                    dispatch({
                        type: 'DELETE_VENUE',
                        user: user
                    })
                })
        },
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
        }
    }
};

const ProfileContainer =
    connect(stateToPropertyMapper,
        dispatcherToPropertyMapper)(Profile);

export default ProfileContainer;
