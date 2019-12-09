import React from 'react';

export default class Index extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div className="index-content">
            {this.props.loggedIn === false &&
            <div className="jumbotron">
                <h1 className="display-4">Welcome to PluggedIn!</h1>
                <p className="lead">An online resource for tour managers and venue owners</p>
            </div>
            }
        </div>
    }
}
