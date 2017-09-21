///<reference path="interfaces.d.ts"/>
import * as React from "react";

export class JamInput extends React.Component<IJamInputProps, IJamInputState> {
  constructor(props: IJamInputProps){
    super(props);
    this.state = {jamString: props.defaultMessage};
  }
  public render() {
    return (
      <input className="jamInput" placeholder={this.state.jamString}></input>
    );
  }
}