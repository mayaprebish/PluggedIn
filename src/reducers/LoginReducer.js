const initialState = {
    username: '',
    password: '',
    userType: '',
    firstName: '',
    lastName: '',
    loggedIn: false,
    user: '',
    venue: ''
};

const LoginReducer = (state = initialState, action) => {
    switch (action.type) {
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
                loggedIn: true,
                username: action.user.username,
                password: action.user.password,
                firstName: action.user.firstName,
                lastName: action.user.lastName,
                userType: action.user.userType,
                venue: action.user.venue
            };
        case 'REGISTER':
            return {
                user: action.user,
                loggedIn: true,
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
