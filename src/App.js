import React, { Component } from 'react';
import {
	BrowserRouter as Router,
	Route,
	Redirect
} from 'react-router-dom';

import './App.css';

import User from './components/User';
import Message from './components/Message';
import Api from './components/Api';

const auth = {
	currentUserExists() {
		// todo check local storge if  currentUsername exists
		if (localStorage.getItem("currentUser") === null) {
			return false
		} else {
			return true;
		}

	}
}

const PrivateRoute = ({ component: Component, ...rest }) => (
	<Route {...rest} render={props => (
		auth.currentUserExists() ? (
			<Component {...props} />
		) : (
				<Redirect to={{
					pathname: '/',
					state: { from: props.location }
				}} />
			)
	)} />
)

class App extends Component {
	constructor() {
		super();
		this.state = {};
	}

	render() {
		return (
			<div className="App">
				<nav className="pt-navbar pt-dark">
					<div className="pt-navbar-group center-title">
						<div className="pt-navbar-heading">Messenger</div>
					</div>
				</nav>

				<Router>
					<div>
						<Route exact path="/" component={User} />
						<PrivateRoute path="/api" component={Api} />
						<PrivateRoute path="/message" component={Message} />
					</div>
				</Router>
			</div>
		);
	}
}

export default App;