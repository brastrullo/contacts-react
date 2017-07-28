import React, { Component } from 'react';
import Form from './Form';
import Button from './Button';

class EditContactModal extends Component {
  confirmDel = () => {
    this.props.modalCtrl("DEL_CONTACT", this.props.selectedContact);
  }

  render() {
    return(
      <div className="flex-container">
        <Form {...this.props} />
        <Button buttonAction={() =>this.confirmDel()} className="btn-full">Delete Contact</Button>
      </div>
    );
  }
}

export default EditContactModal;
