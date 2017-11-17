///<reference path="../../interfaces.d.ts"/>
import * as React from 'react';
import { ChangeEvent } from 'react';


export class JamInput extends React.Component<IJamInputProps, IJamInputState> {
  constructor(props: IJamInputProps) {
    super(props);
    this.state = {jamString: props.defaultMessage};
  }

  public handleSubmit() {
    this.props.onSubmit(this.state.jamString);
  }

  public handleChange(event: ChangeEvent<HTMLInputElement>) {
    this.setState({jamString: event.target.value})
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