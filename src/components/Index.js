import React from 'react';
import LoggedOutHeader from "./LoggedOutHeader";
import LoggedInHeader from "./LoggedInHeader";

export default class Index extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        this.loadUser();
    }

    loadUser () {
        if (this.props.user !== '') {
            this.props.userLoaded();
        }
    }

    render() {
        return <div className="index-content">
            {this.props.loggedIn === false &&
            <div>
                <div className="header">
                    <LoggedOutHeader/>
                </div>
                <div className="jumbotron">
                    <h1 className="display-4">Welcome to PluggedIn!</h1>
                    <p className="lead">An online resource for tour managers and venue owners</p>
                </div>
            </div>
            }

            {this.props.loggedIn === true &&
            <div>
                <div className="header">
                    <LoggedInHeader/>
                </div>
            </div>}
        </div>
    }
}
