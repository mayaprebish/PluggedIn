import {connect} from 'react-redux'
import UserService from "../services/UserService";
import BookingForm from "../components/BookingForm";

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
        createBooking: (mid, aid, tid, vk, date) => {
            userService.createBooking(mid, aid, tid, vk, date)
                .then(user => {
                    dispatch({
                        type: 'ADD_BOOKING',
                        user: user
                    })
                })
        }
    }
};

const BookingContainer =
    connect(stateToPropertyMapper,
        dispatcherToPropertyMapper)(BookingForm);

export default BookingContainer;
