import React, { Component } from 'react';
import CallContactModal from './Modal-CallContact';
import AddContactModal from './Modal-AddContact';

class Modal extends Component {
  openModal = (modalType) => {
    switch (modalType) {
      case "CALL_CONTACT":
        return <CallContactModal {...this.props} />;
      case "ADD_CONTACT":
        return <AddContactModal {...this.props} />;
      default:
        return null;
    }
  }

  render() {
    return (
      <div className="Modal">
        <div className="Modal-background"></div>
        <div className="Modal-container">
          <div className="flex-container">
            {this.openModal(this.props.modalType)}
          </div>
        </div>
      </div>

    );
  }
}

export default Modal;
