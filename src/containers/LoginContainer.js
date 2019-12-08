import {connect} from 'react-redux'
import UserService from "../services/UserService";
import Login from "../components/Login";

const userService = UserService.getInstance();

const stateToPropertyMapper = (state) => {
    return {
        username: state.username,
        password: state.password,
        user: state.user
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
            login: (username, password) => {
                console.log("logging in");
                userService
                    .login(username, password)
                    .then(user => {
                        console.log("found user");
                        console.log(user);
                        if (user == null) {
                            console.log("user not found");
                        } else {
                            dispatch({
                                type: 'LOGIN',
                                user: user
                            })
                        }
                    })
            }
        }
    }
;

const LoginContainer =
    connect(stateToPropertyMapper,
        dispatcherToPropertyMapper)(Login);

export default LoginContainer;
