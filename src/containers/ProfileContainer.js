import {connect} from 'react-redux'
import UserService from "../services/UserService";
import Profile from "../components/Profile";
import VenueService from "../services/VenueService";

const userService = UserService.getInstance();
const venueService = VenueService.getInstance();

const stateToPropertyMapper = (state) => {
    return {
        username: state.username,
        password: state.password,
        firstName: state.firstName,
        lastName: state.lastName,
        userType: state.userType,
        user: state.user,
        venue: state.venue,
        loggedIn: state.loggedIn,
        venueName: state.venueName,
        venueLocation: state.venueLocation,
        artistName: state.artistName,
        artistLocation: state.artistLocation,
        artistGenre: state.artistGenre
    }
};

const dispatcherToPropertyMapper = dispatch => {
    return {
        addTour: (mid, name) => {
            userService.createTour(mid, name)
                .then(user => {
                    dispatch({
                        type: 'ADD_TOUR',
                        user: user
                    })
                })
        },
        deleteTour: (mid, tid) => {
            userService.deleteTour(mid, tid)
                .then(user => {
                    dispatch({
                        type: 'DELETE_TOUR',
                        user: user
                    })
                })
        },
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
        deleteVenue: (ownerId, venueId) => {
            userService.deleteVenue(ownerId, venueId)
                .then(user => {
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
        },
        changeVenueName: (venueName) => {
            console.log(venueName);
            dispatch({
                type: 'CHANGE_VENUE_NAME',
                venueName: venueName
            })
        },
        changeVenueLocation: (venueLocation) => {
            console.log(venueLocation);
            dispatch({
                type: 'CHANGE_VENUE_LOCATION',
                venueLocation: venueLocation
            })
        },
        changeArtistName: (artistName) => {
            console.log(artistName);
            dispatch({
                type: 'CHANGE_ARTIST_NAME',
                artistName: artistName
            })
        },
        changeArtistLocation: (artistLocation) => {
            console.log(artistLocation);
            dispatch({
                type: 'CHANGE_ARTIST_LOCATION',
                artistLocation: artistLocation
            })
        },
        changeArtistGenre: (artistGenre) => {
            console.log(artistGenre);
            dispatch({
                type: 'CHANGE_ARTIST_GENRE',
                artistGenre: artistGenre
            })
        },
    }
};

const ProfileContainer =
    connect(stateToPropertyMapper,
        dispatcherToPropertyMapper)(Profile);

export default ProfileContainer;
