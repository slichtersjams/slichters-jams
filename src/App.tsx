import * as React from 'react';
import './App.css';
import {Flex} from 'react-flex';
import 'react-flex/index.css';
import {JamInput} from "./components/jamInput/JamInput";
import {JamModal} from "./components/jamModal/jamModal";

const logo = require('./img/logo.svg');
const atom = require('./img/atom.png');

class App extends React.Component<IAppProps, IAppState> {
  constructor() {
    super();
    this.state = {showJamModal: false};
    this.onJamChange = this.onJamChange.bind(this);
    this.toggleJamModal = this.toggleJamModal.bind(this);
  }

  public onJamChange(jam: string, jamResult: string) {
    this.setState({showJamModal: true});
  }

  public toggleJamModal() {
    const newState: boolean = !this.state.showJamModal;
    this.setState({showJamModal: newState});
  }

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
          <div>
            <JamInput defaultMessage="puppies" onSubmit={this.onJamChange}/>
          </div>
          <JamModal show={this.state.showJamModal} imgSrc="https://media0.giphy.com/media/3otPovEi2MtN9pEJuo/giphy.gif" close={this.toggleJamModal}/>
        </Flex>
      </div>
    );
  }
}

export default App;
