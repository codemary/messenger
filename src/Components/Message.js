import React, { Component } from 'react';
import { Constants } from 'expo';


class Message extends Component {
    render() {
        return (
            <div className="Message">
                <input type="text" class="pt-input" placeholder="Enter a contact" />
                <h5>Message</h5>
                <textarea class="pt-input .default" dir="auto"></textarea>
                <div >
                    <span class="pt-icon-large pt-icon-phone"></span>
                    <button type="button" class="pt-button .modifier">Button</button>
                </div >
            </div >

        );
    }
}

export default Message;

