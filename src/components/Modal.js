import React, { Component } from 'react';
import CallContactModal from './Modal-CallContact';
import AddContactModal from './Modal-AddContact';
import EditContactModal from './Modal-EditContact';
import DeleteContactModal from './Modal-DeleteContact';
import Button from './Button';

class Modal extends Component {
  openModal = (modalType) => {
    switch (modalType) {
      case "CALL_CONTACT":
        return <CallContactModal {...this.props} />;
      case "ADD_CONTACT":
        return <AddContactModal {...this.props} />;
      case "EDIT_CONTACT":
        return <EditContactModal {...this.props} />;
      case "DEL_CONTACT":
        return <DeleteContactModal {...this.props} />;
      default:
        return null;
    }
  }

  render() {
    return (
      <div className="Modal">
        <div className="Modal-background"></div>
        <div className="Modal-container">
          {!(this.props.modalType === "CALL_CONTACT" || this.props.modalType === "DEL_CONTACT") &&
            <div className="Modal-header">
              <span className="Modal-header-title">{this.props.modalType.replace("_", " ")}</span>
              <Button buttonAction={this.props.hideModal} className="btn-close">CLOSE</Button>
            </div>
          }
          {this.openModal(this.props.modalType)}
        </div>
      </div>
    );
  }
}

export default Modal;
