import React, { Component } from 'react';
import { withRouter } from 'react-router'
import './Message.css';

class Message extends Component {

    constructor() {
        super();
        this.state = {
            phone: '',
            phoneInvalid: false,
            message: '',
            messageInvalid: false
        };
    }

    // button: if clicked, return to route path
    handleChangeUserClick = () => {
        this.props.history.push({
            pathname: '/',
        })
    }

    // event: phone number input
    handlePhoneInputChange = (e) => {
        this.setState({ phone: e.target.value });
    }

    // event: message input
    handleMessageInputChange = (e) => {
        this.setState({ message: e.target.value });
    }

    // to check if the phone number is valid or not
    isPhoneValid = (phoneNum) => {
        var pattern = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
        if (phoneNum.match(pattern)) {
            this.setState({ phoneInvalid: false });
            return true;
        }
        else {
            this.setState({ phoneInvalid: true });
            return false;
        }
    }

    handleSendMessage = () => {
        if (!this.isPhoneValid(this.state.phone)) {
            return
        }

        console.log("handleSend", this.state.message.length);

        if (this.state.message.length === 0) {
            this.setState({ messageInvalid: true });
            return
        } else {
            this.setState({ messageInvalid: false });
        }

        fetch('/sendsms', {
            method: 'POST',
            headers: {
                Accept: 'application/JSON',
                'Content-Type': 'application/JSON'
            },
            body: JSON.stringify({
                "sid": this.props.location.state.username,
                "token": this.props.location.state.apiKey,
                "recipient": this.state.phone,
                "body": this.state.message
            })
        });
    }

    handleCall = () => {
        if (!this.isPhoneValid(this.state.phone)) {
            return
        }

        fetch('/call', {
            method: 'POST',
            headers: {
                Accept: 'application/JSON',
                'Content-Type': 'application/JSON'
            },
            body: JSON.stringify({
                "sid": this.props.location.state.username,
                "token": this.props.location.state.apiKey,
                "recipient": this.state.phone
            })
        });
    }

    render() {
        return (
            <div className="pt-form-group pt-large center-div">
                <h3> Hi {this.props.currentUser || this.props.location.state.username} ! </h3>
                {/* button to return to the route path */}
                <label className="pt-label">
                    <button
                        type="button"
                        className="pt-button pt-icon-user"
                        // onClick is an event handler
                        onClick={this.handleChangeUserClick}
                    >
                        Change User
                    </button>
                </label>
                {/* phone number input field */}
                <label className="pt-label">
                    <div className="pt-input-group pt-intent-primary">
                        <span className="pt-icon pt-icon-phone"></span>
                        <input
                            type="tel"
                            className="pt-input pt-small"
                            placeholder="Enter phone no."
                            onChange={this.handlePhoneInputChange}
                        />
                    </div>
                </label>
                {/* label if phone number is invalid */}
                {this.state.phoneInvalid && <h5> Phone no. is invalid! </h5>}
                {/* message input text area */}
                <label className="pt-label">
                    <textarea
                        className="pt-input pt-fill pt-intent-primary"
                        placeholder="Type a message..."
                        onChange={this.handleMessageInputChange}
                    >
                    </textarea>
                    {/* label if message is invalid */}
                    {this.state.messageInvalid && <h5> Empty Message! </h5>}
                </label>
                {/* send message and call buttons */}
                <label className="pt-label">
                    <button
                        type="button"
                        className="pt-button pt-intent-success"
                        onClick={this.handleSendMessage}
                    >
                        Send
                    <span className="pt-icon-standard pt-icon-envelope pt-align-right"></span>
                    </button>

                    <button
                        type="button"
                        className="pt-button pt-intent-success"
                        onClick={this.handleCall}
                    >
                        Call
                    <span className="pt-icon-standard pt-icon-phone pt-align-right"></span>
                    </button>
                </label>
            </div >

        );
    }
}

export default withRouter(Message);

