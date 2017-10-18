import * as React from 'react';
import './App.css';
// import { JamInput } from './JamInput';
// import { JamText } from './JamText';

const logo = require('./full-white.svg');

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <div className="gradient">
                    <img src={logo} className="full-white"/>
                    <text className="let-s-jam">LET'S JAM</text>
                    {/*<JamInput defaultMessage="test"/>*/}
                    {/*<JamText/>*/}
                </div>
            </div>
        );
    }
}

export default App;
