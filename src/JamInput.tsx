///<reference path="interfaces.d.ts"/>
import * as React from 'react';

export class JamInput extends React.Component<IJamInputProps, IJamInputState> {
  constructor(props: IJamInputProps) {
    super(props);
    this.state = {jamString: props.defaultMessage};
  }

  public handleSubmit() {
  }

  public render() {
    return (
      <div>
        <input className="jamInput" placeholder={this.state.jamString}/>
        <button onClick={e => this.handleSubmit()} />
        {/*<a className="test-results">{this.state.jamString}</a>*/}
      </div>
    );
  }
}