import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './PluggedIn.css';
import Header from "./LoggedOutHeader";

import BookingForm from "./BookingForm";
import PrivacyPolicy from "./PrivacyPolicy"

import {createStore} from 'redux'
import {Provider} from 'react-redux'
import LoginReducer from "../reducers/LoginReducer";

import LoginContainer from "../containers/LoginContainer";
import RegisterContainer from "../containers/RegisterContainer";
import ProfileContainer from "../containers/ProfileContainer";
import IndexContainer from "../containers/IndexContainer";
import SearchContainer from "../containers/SearchContainer";

const loginStore = createStore(LoginReducer);

export default class PluggedIn extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            user: ''
        }
    }

    render() {
        return (
            <Router>
                <div className="content">
                    <Provider store={loginStore}>
                        <div className="content">
                            <Route exact path="/" component={IndexContainer}/>
                            <Route path="/login" component={LoginContainer}/>
                            <Route path="/register" component={RegisterContainer}/>
                            <Route path="/profile" component={ProfileContainer}/>
                            <Route path="/search" component={SearchContainer}/>
                            <Route path="/booking" component={BookingForm}/>
                            <Route path="/privacy-policy" component={PrivacyPolicy}/>
                        </div>
                    </Provider>
                </div>
            </Router>
        )
    }
}
