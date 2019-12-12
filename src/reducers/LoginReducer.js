const initialState = {
    username: '',
    password: '',
    userType: 'Tour Manager',
    firstName: '',
    lastName: '',
    loggedIn: false,
    user: '',
    venue: '',
    venueName: '',
    venueLocation: ''
};

const LoginReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TOUR':
        case 'DELETE_TOUR':
        case 'ADD_ARTIST':
        case 'DELETE_ARTIST':
        case 'ADD_VENUE':
        case 'DELETE_VENUE':
        case 'ADD_BOOKING':
            return {
                user: action.user,
                loggedIn: state.loggedIn,
                username: state.username,
                password: state.password,
                firstName: state.firstName,
                lastName: state.lastName,
                userType: state.userType,
                venue: state.venue,
                venueName: state.venueName,
                venueLocation: state.venueLocation
            };
        case 'USER_LOADED':
            return {
                user: state.user,
                loggedIn: true,
                username: state.username,
                password: state.password,
                firstName: state.firstName,
                lastName: state.lastName,
                userType: state.userType,
                venue: state.venue,
                venueName: state.venueName,
                venueLocation: state.venueLocation
            };
        case 'LOGOUT':
            return {
                user: '',
                loggedIn: false,
                username: '',
                password: '',
                firstName: '',
                lastName: '',
                userType: 'Tour Manager',
                venue: '',
                venueName: '',
                venueLocation: ''
            };
        case 'SELECT_VENUE':
            return {
                user: state.user,
                loggedIn: state.loggedIn,
                username: state.username,
                password: state.password,
                firstName: state.firstName,
                lastName: state.lastName,
                userType: state.userType,
                venue: action.venue,
                venueName: state.venueName,
                venueLocation: state.venueLocation
            };
        case 'CHANGE_USERNAME':
            return {
                user: state.user,
                loggedIn: state.loggedIn,
                username: action.username,
                password: state.password,
                firstName: state.firstName,
                lastName: state.lastName,
                userType: state.userType,
                venue: state.venue,
                venueName: state.venueName,
                venueLocation: state.venueLocation
            };
        case 'CHANGE_PASSWORD':
            return {
                user: state.user,
                loggedIn: state.loggedIn,
                username: state.username,
                password: action.password,
                firstName: state.firstName,
                lastName: state.lastName,
                userType: state.userType,
                venue: state.venue,
                venueName: state.venueName,
                venueLocation: state.venueLocation
            };
        case 'CHANGE_FIRST_NAME':
            return {
                user: state.user,
                loggedIn: state.loggedIn,
                username: state.username,
                password: state.password,
                firstName: action.firstName,
                lastName: state.lastName,
                userType: state.userType,
                venue: state.venue,
                venueName: state.venueName,
                venueLocation: state.venueLocation
            };
        case 'CHANGE_LAST_NAME':
            return {
                user: state.user,
                loggedIn: state.loggedIn,
                username: state.username,
                password: state.password,
                firstName: state.firstName,
                lastName: action.lastName,
                userType: state.userType,
                venue: state.venue,
                venueName: state.venueName,
                venueLocation: state.venueLocation
            };
        case 'CHANGE_USER_TYPE':
            return {
                user: state.user,
                loggedIn: state.loggedIn,
                username: state.username,
                password: state.password,
                firstName: state.firstName,
                lastName: state.lastName,
                userType: action.userType,
                venue: state.venue,
                venueName: state.venueName,
                venueLocation: state.venueLocation
            };
        case 'CHANGE_VENUE_NAME':
            return {
                user: state.user,
                loggedIn: state.loggedIn,
                username: state.username,
                password: state.password,
                firstName: state.firstName,
                lastName: state.lastName,
                userType: state.userType,
                venue: state.venue,
                venueName: action.venueName,
                venueLocation: state.venueLocation
            };
        case 'CHANGE_VENUE_LOCATION':
            return {
                user: state.user,
                loggedIn: state.loggedIn,
                username: state.username,
                password: state.password,
                firstName: state.firstName,
                lastName: state.lastName,
                userType: state.userType,
                venue: state.venue,
                venueName: state.venueName,
                venueLocation: action.venueLocation
            };
        case 'CHANGE_ARTIST_NAME':
            return {
                user: state.user,
                loggedIn: state.loggedIn,
                username: state.username,
                password: state.password,
                firstName: state.firstName,
                lastName: state.lastName,
                userType: state.userType,
                venue: state.venue,
                venueName: state.venueName,
                venueLocation: state.venueLocation
            };
        case 'CHANGE_ARTIST_LOCATION':
            return {
                user: state.user,
                loggedIn: state.loggedIn,
                username: state.username,
                password: state.password,
                firstName: state.firstName,
                lastName: state.lastName,
                userType: state.userType,
                venue: state.venue,
                venueName: state.venueName,
                venueLocation: state.venueLocation
            };
        case 'CHANGE_ARTIST_GENRE':
            return {
                user: state.user,
                loggedIn: state.loggedIn,
                username: state.username,
                password: state.password,
                firstName: state.firstName,
                lastName: state.lastName,
                userType: state.userType,
                venue: state.venue,
                venueName: state.venueName,
                venueLocation: state.venueLocation
            };
        case 'LOGIN':
            return {
                user: action.user,
                loggedIn: state.loggedIn,
                username: action.user.username,
                password: action.user.password,
                firstName: action.user.firstName,
                lastName: action.user.lastName,
                userType: action.user.userType,
                venue: state.venue,
                venueName: state.venueName,
                venueLocation: state.venueLocation
            };
        case 'REGISTER':
            return {
                user: action.user,
                loggedIn: state.loggedIn,
                username: action.user.username,
                password: action.user.password,
                firstName: action.user.firstName,
                lastName: action.user.lastName,
                userType: action.user.userType,
                venue: action.user.venue,
                venueName: state.venueName,
                venueLocation: state.venueLocation
            };
        default:
            return state;
    }
};

export default LoginReducer;
