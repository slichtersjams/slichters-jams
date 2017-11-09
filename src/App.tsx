import * as React from 'react';
import './App.css';
import { JamInput } from './JamInput';
import { JamText } from './JamText';
import { Flex } from 'react-flex';
import 'react-flex/index.css';

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
                        Search anything in the world and see if it’s jam-worthy according to Slichter.
                    </div>
                    <div className="text-input">
                        <JamInput defaultMessage="puppies"/>
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
