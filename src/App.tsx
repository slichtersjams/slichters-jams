import * as React from 'react';
import './App.css';
import { JamInput } from './JamInput';
import { JamText } from './JamText';
import { Flex } from 'react-flex';
import 'react-flex/index.css';

const logo = require('./logo.svg');
const atom = require('./atom.png');

class App extends React.Component {
    render() {
        return (
            <div className="App gradient">
                <Flex justifyContent="space-between">
                    <img src={logo}/>
                    <img src={atom}/>
                </Flex>
                <Flex column={true} alignItems="center">
                    <div>
                        <text className="let-s-jam">LET'S JAM</text>
                    </div>
                    <div>
                        <text className="search-anything">Search anything in the world and see if it’s jam-worthy
                            according to Slichter.
                        </text>
                    </div>
                    <div className="text-input-rectangle">
                        <JamInput defaultMessage="test"/>
                    </div>
                    <div className="search-rectangle">
                        <input className="search-button" type="button" value="Search"/>
                    </div>
                    <div>
                        <JamText/>
                    </div>
                </Flex>
            </div>
        );
    }
}

export default App;
