import React, { Component } from 'react';
import { withRouter } from 'react-router'
import './User.css';

class User extends Component {
    constructor() {
        super();
        this.state = {
            userInvalid: false,
            username: '',
        };
    }

    // input event object binding
    handleUserInputChange = (e) => {
        var username = e.target.value;
        this.setState({ username: username });

    }

    // key press event object
    handleUserInputKeyPress = (e) => {
        if (e.key === 'Enter') {
            this.handleUserInputClick()
        }
    }


    handleUserInputClick = () => {
        // if username exists userExists true
        console.log(this.state.username)
        if (this.state.username.length >= 6) {
            this.setState({ userInvalid: false })
        } else {
            this.setState({ userInvalid: true })
            return
        }

        localStorage.setItem("currentUser", this.state.username)

        var apiKey = localStorage.getItem(this.state.username)

        // if api key is not present in the local storage, the user will be asked for an api key. 
        // If the key is already present for that user name, then the message page will appear.
        if (apiKey === null) {
            this.props.history.push({
                pathname: '/api',
                state: {
                    username: this.state.username,
                }
            })
        } else {
            this.props.history.push({
                pathname: '/message',
                state: {
                    username: this.state.username,
                    apiKey: apiKey,
                }
            })
        }
    }

    render() {
        return (
            <div className="User">

                <div className="pt-form-group center-div">
                    <label className="pt-label">
                        {/* 2. create an input field to enter the username */}
                        <div className="pt-input-group .pt-large">
                            {/* text input for the username */}
                            <input
                                type="text"
                                className="pt-input"
                                placeholder="Enter your username/account id"
                                onChange={this.handleUserInputChange}
                                onKeyPress={this.handleUserInputKeyPress}
                            />
                            {/* input click button */}
                            <button
                                className="pt-button pt-minimal pt-intent-primary pt-icon-arrow-right"
                                onClick={this.handleUserInputClick}
                            />
                        </div>
                    </label>
                    {/* label to show that the username is invalid */}
                    {this.state.userInvalid && <label className="pt-label">
                        <span> Username should be atleast 6 characters </span>
                    </label>}

                </div>

            </div>
        );
    }
}

export default withRouter(User);