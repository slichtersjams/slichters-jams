import * as React from 'react';
import './App.css';
import { JamInput } from './JamInput';

const logo = require('./logo.svg');

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Slichter's Jams</h2>
        </div>
        <div>
          <JamInput defaultMessage="test"/>
        </div>
      </div>
    );
  }
}

export default App;
