import React, { Component } from 'react';
import { withRouter } from 'react-router'
import './Api.css';

class Api extends Component {

    constructor() {
        super();
        this.state = {
            apiKey: '',
            apiKeyInvalid: false
        };
    }

    handleAPIKeyChange = (e) => {
        this.setState({ apiKey: e.target.value });
    }


    handleAPIKeyInputKeyPress = (e) => {
        if (e.key === 'Enter') {
            this.handleAPIKeyInputClick()
        }
    }


    handleAPIKeyInputClick = () => {
        console.log(this.state.apiKey)


        if (this.state.apiKey.length >= 6) {
            this.setState({ apiKeyInvalid: false })
        } else {
            this.setState({ apiKeyInvalid: true })
            return
        }

        var currentUser = this.props.currentUser || this.props.location.state.username;

        localStorage.setItem(currentUser, this.state.apiKey)


        this.props.history.push({
            pathname: '/message',
            state: {
                username: currentUser,
                apiKey: this.state.apiKey
            }
        })
    }

    render() {
        return (

            <div className="center-div">
                <h3> Hello {this.props.currentUser || this.props.location.state.username} ! </h3>

                <div className="pt-input-group .pt-large">
                    <input
                        type="text"
                        className="pt-input"
                        placeholder="Enter API Key/Token"
                        onChange={this.handleAPIKeyChange}
                        onKeyPress={this.handleAPIKeyInputKeyPress}
                    />
                    <button
                        className="pt-button pt-minimal pt-intent-primary pt-icon-arrow-right"
                        onClick={this.handleAPIKeyInputClick}
                    />
                </div>
                {/* label will be rendered if api key is invalid */}
                {this.state.apiKeyInvalid && <label className="pt-label">
                    <span> API Key is invalid</span>
                </label>}
            </div>


        );
    }
}

export default withRouter(Api);

