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
  render() {
    return (
      <div className="App">
        <header style={styles.header}>
        </header>
        <div style={styles.textInput}>
          <div class="pt-input-group pt-large">
            <input type="text" style={styles.input} class="pt-input pt-large" placeholder="Enter your name" />
            <button
              style={styles.button}
              onClick={() => this.handleClick()}
              class="pt-button 
              pt-large
              pt-minimal
              pt-intent-primary
              pt-icon-arrow-right">
            </button>
        </div>
      </div>
      </div >
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