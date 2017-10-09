///<reference path="../../interfaces.d.ts"/>
import * as React from 'react';
import './JamInput.css';
import { ChangeEvent } from 'react';

export class JamInput extends React.Component<IJamInputProps, IJamInputState> {
  constructor(props: IJamInputProps) {
    super(props);
    this.state = {jamString: props.defaultMessage};
  }

  public handleSubmit() {
  }

  public handleChange(event: ChangeEvent<HTMLInputElement>) {

  }

  public render() {
    return (
      <div>
        <input className="jamInput" placeholder={this.state.jamString} onChange={e => this.handleChange(e)}/>
        <button onClick={e => this.handleSubmit()}>Submit</button>
      </div>
    );
  }
}