const initialState = {
    username: '',
    password: '',
    userType: 'Tour Manager',
    firstName: '',
    lastName: '',
    loggedIn: false,
    user: '',
    venue: ''
};

const LoginReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_ARTIST':
            return {
                user: action.user,
                loggedIn: state.loggedIn,
                username: state.username,
                password: state.password,
                firstName: state.firstName,
                lastName: state.lastName,
                userType: state.userType,
                venue: state.venue
            };
        case 'DELETE_ARTIST':
            return {
                user: action.user,
                loggedIn: state.loggedIn,
                username: state.username,
                password: state.password,
                firstName: state.firstName,
                lastName: state.lastName,
                userType: state.userType,
                venue: state.venue
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
                venue: state.venue
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
                venue: ''
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
                venue: action.venue
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
                venue: state.venue
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
                venue: state.venue
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
                venue: state.venue
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
                venue: state.venue
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
                venue: state.venue
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
                venue: state.venue
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
                venue: action.user.venue
            };
        default:
            return state;
    }
};

export default LoginReducer;
