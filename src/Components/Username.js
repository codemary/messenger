import React, { Component } from 'react';
import './App.css';

class Username extends Component {
    render() {
        return (
            <div className="Username">
                <h5>John Doe</h5>
                <div class="pt-input-group .pt-large">
                    <input type="text" class="pt-input" placeholder="Enter your name" />
                    <button class="pt-button pt-minimal pt-intent-primary pt-icon-arrow-right"></button>
                </div>
                <Message />
            </div >
        );
    }
}

export default Username;
