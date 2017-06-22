import React, { Component } from 'react';
import Modal from './Modal';

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
  constructor(props) {
    super(props);
    this.hideModal = this.hideModal.bind(this);
  }
  
  hideModal() {
    this.props.handleModal();
  }
  render() {
    return(
      <Modal>
        <span className="calling-contact-header">Calling {this.props.callContact}<EllipsesAnimation /></span>
        <button className="btn Decline-call-btn" onClick={this.hideModal} >&#10006;</button>
      </Modal>
    );
  }

}

export default CallContactModal;
