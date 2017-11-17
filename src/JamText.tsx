///<reference path="interfaces.d.ts"/>
import * as React from 'react';
import {JamInput} from "./components/jamInputForm/JamInput";

export class JamText extends React.Component<IJamProps, IJamState> {
  constructor(props: IJamProps) {
    super(props);
    this.state = {jamText: ''};
    this.newJam = this.newJam.bind(this);
  }

  public newJam(jam: string) {
    return fetch('https://slichters-jams.appspot.com/' + jam).then((response: Response) => {
      return response.text();
    }).then((value: string) => {
      this.setState({jamText: value});
    });
  }

  public render() {
    return (
      <div>
        <div>
          <JamInput defaultMessage="puppies" onSubmit={this.newJam}/>
        </div>
        <div>
          <h3 className="jamText">{this.state.jamText}</h3>
        </div>
      </div>
    );
  }
}
