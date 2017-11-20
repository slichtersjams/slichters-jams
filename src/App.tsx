import * as React from 'react';
import './App.css';
import { Flex } from 'react-flex';
import 'react-flex/index.css';
import { JamInput } from './components/jamInput/JamInput';

const logo = require('./img/logo.svg');
const atom = require('./img/atom.png');

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div id="header-bar">
          <Flex justifyContent="space-between">
            <div id="logo">
              <img src={logo}/>
            </div>
            <div id="atom">
              <img src={atom}/>
            </div>
          </Flex>
        </div>

        <div className="vert-spacer"/>

        <Flex column={true} alignItems="center">
          <div className="jam-title">
            LET'S JAM
          </div>
          <div className="search-anything">
            Search anything to test it’s JAM-worthiness. Go ahead—you know you want to.
          </div>
          <div>
            <JamInput defaultMessage="puppies" onSubmit={value => {}}/>
          </div>
        </Flex>
      </div>
    );
  }
}

export default App;
