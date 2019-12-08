const initialState = {
    username: '',
    password: '',
    firstName: '',
    lastName: '',
    userType: 'Tour Manager',
    loggedIn: false,
    user: []
};

const LoginReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOAD':
            return {
                user: state.user,
                loggedIn: state.loggedIn,
                username: state.username,
                password: state.password,
                firstName: state.firstName,
                lastName: state.lastName,
                userType: state.userType
            };
        case 'CHANGE_USERNAME':
            return {
                user: state.user,
                loggedIn: state.loggedIn,
                username: action.username,
                password: state.password,
                firstName: state.firstName,
                lastName: state.lastName,
                userType: state.userType
            };
        case 'CHANGE_PASSWORD':
            return {
                user: state.user,
                loggedIn: state.loggedIn,
                username: state.username,
                password: action.password,
                firstName: state.firstName,
                lastName: state.lastName,
                userType: state.userType
            };
        case 'CHANGE_FIRST_NAME':
            return {
                user: state.user,
                loggedIn: state.loggedIn,
                username: state.username,
                password: state.password,
                firstName: action.firstName,
                lastName: state.lastName,
                userType: state.userType
            };
        case 'CHANGE_LAST_NAME':
            return {
                user: state.user,
                loggedIn: state.loggedIn,
                username: state.username,
                password: state.password,
                firstName: state.firstName,
                lastName: action.lastName,
                userType: state.userType
            };
        case 'CHANGE_USER_TYPE':
            return {
                user: state.user,
                loggedIn: state.loggedIn,
                username: state.username,
                password: state.password,
                firstName: state.firstName,
                lastName: state.lastName,
                userType: action.userType
            };
        case 'LOGIN':
            console.log(action.user);
            return {
                user: action.user,
                loggedIn: true,
                username: state.username,
                password: state.password,
                firstName: state.firstName,
                lastName: state.lastName,
                userType: state.userType,
            };
        case 'REGISTER':
            console.log(action.user);
            return {
                user: action.user,
                loggedIn: true,
                username: state.username,
                password: state.password,
                firstName: state.firstName,
                lastName: state.lastName,
                userType: state.userType,
            };
        default:
            return state;
    }
};

export default LoginReducer;
