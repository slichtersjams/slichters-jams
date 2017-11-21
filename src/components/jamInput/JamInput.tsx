///<reference path="../../interfaces.d.ts"/>
import * as React from 'react';
import { ChangeEvent, KeyboardEvent} from 'react';

const jamGif = 'https://media.giphy.com/media/d1ELBcZCFmuWs/giphy.gif';
const notJamGif = 'https://media1.giphy.com/media/fvLv9Y62uye2Y/giphy.gif';
const missingGif = 'https://media3.giphy.com/media/xT0BKmtQGLbumr5RCM/giphy.gif';

export class JamInput extends React.Component<IJamInputProps, IJamInputState> {
  constructor(props: IJamInputProps) {
    super(props);
    this.state = {jamString: props.defaultMessage};
  }

  public handleSubmit() {
    return fetch('https://slichters-jams.appspot.com/?jamText=' + this.state.jamString).then((response: Response) => {
      return response.text();
    }).then((value: string) => {
      let jamImg: string = missingGif;

      if (value === 'Jam!') {
        jamImg = jamGif;
      }
      else if (value === 'Not a Jam!') {
        jamImg = notJamGif;
      }
      this.props.onSubmit(this.state.jamString, value, jamImg);
    });
  }

  public handleChange(event: ChangeEvent<HTMLInputElement>) {
    this.setState({jamString: event.target.value});
  }

  public handleKeyUp(event: KeyboardEvent<HTMLInputElement>) {
    if( event.key === 'Enter') {
      this.handleSubmit();
    }
  }

  public render() {
    return (
      <div>
        <div className="text-input">
          <input
            className="jamInput text-input-default"
            placeholder={this.props.defaultMessage}
            onChange={(e: ChangeEvent<HTMLInputElement>) => this.handleChange(e)}
            onKeyUp={(e: KeyboardEvent<HTMLInputElement>) => this.handleKeyUp(e)}
          />
        </div>
        <div className="search-rectangle">
          <button className="search-button" type="button" onClick={e => this.handleSubmit()}>Search</button>
        </div>
      </div>
    );
  }
}