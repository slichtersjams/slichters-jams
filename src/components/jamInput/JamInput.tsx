///<reference path="../../interfaces.d.ts"/>
import * as React from 'react';
import { ChangeEvent } from 'react';

const jamGif = 'https://media.giphy.com/media/d1ELBcZCFmuWs/giphy.gif';
const notJamGif = 'https://media1.giphy.com/media/fvLv9Y62uye2Y/giphy.gif';

export class JamInput extends React.Component<IJamInputProps, IJamInputState> {
  constructor(props: IJamInputProps) {
    super(props);
    this.state = {jamString: props.defaultMessage, jamText: ''};
  }

  public handleSubmit() {
    return fetch('https://slichters-jams.appspot.com/?jamText=' + this.state.jamString).then((response: Response) => {
      return response.text();
    }).then((value: string) => {
      this.setState({jamText: value});
      let jamImg: string = this.state.jamText == 'Jam!' ? jamGif: notJamGif;
      this.props.onSubmit(this.state.jamString, this.state.jamText, jamImg);
    });
  }

  public handleChange(event: ChangeEvent<HTMLInputElement>) {
    this.setState({jamString: event.target.value});
  }

  public render() {
    return (
      <div>
        <div className="text-input">
          <input
            className="jamInput text-input-default"
            placeholder={this.props.defaultMessage}
            onChange={(e: ChangeEvent<HTMLInputElement>) => this.handleChange(e)}
          />
        </div>
        <div className="search-rectangle">
          <button className="search-button" type="button" onClick={e => this.handleSubmit()}>Search</button>
        </div>
        <div>
          <h3 className="jamText">{this.state.jamText}</h3>
        </div>
      </div>
    );
  }
}