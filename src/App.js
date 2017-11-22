import React, { Component } from 'react';
import ToggleDisplay from 'react-toggle-display';
import { Router, Route, Switch } from 'react-router';
import './App.css';

class App extends Component {
	constructor() {
		super();
		this.state = { show: false };
	}

	handleClick() {
		this.setState({
			show: !this.state.show
		});
	}

	onClick() {
		console.log("onclick");
		if (!this.state.shouldHide) {
			this.setState({
				shouldHide: true
			})
		} else {
			this.setState({
				shouldHide: false
			})
		}
	}

	render() {
		return (
			<div className="App">
				<div className="Username">
					<header style={styles.header}></header>
					<div style={styles.textInput}>
						<div className="pt-input-group pt-large">
							<input type="text" style={styles.input} className="pt-input pt-large" placeholder="Enter your name" />
							<button
								style={styles.button}
								onClick={this.onClick}
								className="pt-button pt-large pt-minimal pt-intent-primary pt-icon-arrow-right">
							</button>
						</div>
					</div>
				</div>
				<div className={this.state.shouldHide ? 'hidden' : ''}>
					<input type="text" className="pt-input" placeholder="Enter a contact" />
					<h5>Message</h5>
					<textarea className="pt-input .default" dir="auto"></textarea>
					<div >
						<span className="pt-icon-large pt-icon-ph	one"></span>
						<button type="button" className="pt-button .modifier">Button</button>
					</div >
				</div>
				<div className={this.state.shouldHide ? 'hidden' : ''}>
					<h5>John Doe</h5>
					<div className="pt-input-group .pt-large">
						<input type="text" className="pt-input" placeholder="Enter your name" />
						<button className="pt-button pt-minimal pt-intent-primary pt-icon-arrow-right"></button>
					</div>
				</div>
			</div>
		);
	}
}

export default App;

const styles = ({
	header: {
		borderBottomWidth: 1,
		borderBottomColor: '#FE0082',
	},
	button: {
		flex: 1,
		backgroundColor: '#ffffff',
		color: 'blue',
		marginTop: 6,
		marginRight: 5,
	},
	input: {
		fontSize: 21,
	},
	textInput: {
		width: '30%',
		marginTop: '23%',
		marginLeft: '35%',
	},
});