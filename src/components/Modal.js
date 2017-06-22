import React, { Component } from 'react';
import CallContactModal from './Modal-CallContact';
import AddContactModal from './Modal-AddContact';

function ModalContainer(props) {
  return (
    <div className="Modal-container">
      <div className="flex-container">
        {props.children}
      </div>
    </div>
  );
}

class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = { modalType: null };
  }

  render() {
    return (
      <div className="Modal">
        <div className="Modal-background"></div>
        <ModalContainer openModal={this.state.modalType}>
          {this.props.children}
        </ModalContainer>
      </div>

    );
  }
}

export default Modal;
