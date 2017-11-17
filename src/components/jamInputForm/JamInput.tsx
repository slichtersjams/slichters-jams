///<reference path="../../interfaces.d.ts"/>
import * as React from 'react';
import { ChangeEvent } from 'react';


export class JamInput extends React.Component<IJamInputProps, IJamInputState> {
  constructor(props: IJamInputProps) {
    super(props);
    this.state = {jamString: props.defaultMessage};
  }

  public handleSubmit() {
    alert("Button clicked")
  }

  public handleChange(event: ChangeEvent<HTMLInputElement>) {

  }

  public render() {
    return (
      <div>
        <div className="text-input">
          <input className="jamInput text-input-default" placeholder={this.state.jamString} onChange={e => this.handleChange(e)}/>
        </div>
        <div className="search-rectangle">
          <button className="search-button" type="button" onClick={e => this.handleSubmit()}>Search</button>
        </div>
      </div>
    );
  }
}