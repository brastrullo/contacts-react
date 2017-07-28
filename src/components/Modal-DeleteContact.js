import React, { Component } from 'react';
import Button from './Button';

class DeleteContactModal extends Component {
  deleteContact = () => {
    let contacts = this.props.contactList;
    let contact = this.props.selectedContact;
    contacts.splice(contact.id - 1, 1);
    contacts.forEach(function(obj, i){
      obj.id = i + 1;
    });
    this.props.updateContacts(contacts);
    this.props.hideModal();
    console.log("Modal-del new list: " + JSON.stringify(contacts));
  }

  render() {
    return(
      <div className="flex-container">
        <div className="delete-contact-text">
          <h1>Delete Contact</h1>
          <span>Are you sure you want to delete contact "{this.props.selectedContact.contactName}"?</span>
        </div>
        <Button buttonAction={this.deleteContact} className="btn-full">YES</Button>
        <Button buttonAction={() => this.props.modalCtrl("EDIT_CONTACT")} className="btn-full">NO</Button>
      </div>
    );
  }

}

export default DeleteContactModal;
