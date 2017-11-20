import * as React from 'react';
import './jamModal.css';

export class JamModal extends React.Component<IJamModalProps, IJamModalState> {
  constructor(props: IJamModalProps) {
    super(props);
    this.state = {};
  }

  public handleClick() {
    this.props.close();
  }

  public render() {
    if (!this.props.show) {
      return null;
    }

    return (
      <div className="backdrop" onClick={e => this.handleClick()}>
        <div className="modal">
          <img src={this.props.imgSrc} />
        </div>
      </div>
    );
  }
}
