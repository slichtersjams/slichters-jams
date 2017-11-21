import * as React from 'react';
import './jamModal.css';

export class JamModal extends React.Component<IJamModalProps, IJamModalState> {
  constructor(props: IJamModalProps) {
    super(props);
    this.state = {};
  }

  public render() {
    if (!this.props.show) {
      return null;
    }

    return (
      <div className="backdrop" onClick={e => this.props.close()}>
        <div className="modal">
          <img src={this.props.imgSrc} height="275" />
          <h3 className="jam-text">{this.props.jamText}</h3>
        </div>
      </div>
    );
  }
}
