import React, { Component } from 'react';

function EllipsesAnimation(){
  return (
    <div className="Ellipses-animation">
      <div className="dot dot1">.</div>
      <div className="dot dot2">.</div>
      <div className="dot dot3">.</div>
    </div>
  );
}

class CallContactModal extends Component {
  hideModal = () => {
    this.props.hideModal();
  }
  render() {
    return(
      <div>
        <span className="calling-contact-header">Calling {this.props.callContact[0]}</span>
        <div>{this.props.callContact[1]}<EllipsesAnimation /></div>
        <button className="btn Decline-call-btn" onClick={this.hideModal} >&#10006;</button>
      </div>
    );
  }

}

export default CallContactModal;
