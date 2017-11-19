import * as React from "react";

export class JamModal extends React.Component<IJamModalProps, IJamModalState> {
  constructor(props: IJamModalProps) {
    super(props);
    this.state = {};
  }

  public render() {
    return (
      <div>
        <img src={this.props.imgSrc} />
      </div>
    )
  }
}
