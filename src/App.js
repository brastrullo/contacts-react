import React, { Component } from 'react';
import ContactContainers from './components/ContactContainers';
import SearchContacts from './components/SearchContacts';
import Modal from './components/Modal';
import Button from './components/Button';
import './styles/AppContainer.css'
import './styles/Modal.css';
import './styles/ContactContainers.css';

class App extends Component {
  constructor(props) {
    super(props);
    let contactList =  [
      {
        id : 1,
        contactName : 'Mom',
        contactCell : '6475187823'
      },
      {
        id : 2,
        contactName : 'Papa',
        contactCell : '5195734109'
      },
      {
        id : 3,
        contactName : 'Byron',
        contactCell : '6472080855'
      },
      {
        id : 4,
        contactName : 'Barry',
        contactCell : '6477866146'
      }
    ];
    this.state = {
      modalType: null,
      contactList: contactList,
      contactsLength: contactList.length,
      selectedContact: null
    }
  }

  filterContacts = (filteredContacts) => {
    this.setState({ contactList: filteredContacts, contactsLength: filteredContacts.length});
  }

  callHandler = (contactArray) => {
    this.openModal("CALL_CONTACT");
  }

  selectHandler = (contact) => {
    this.setState({selectedContact: contact});
  }

  openModal = (modalType) => {
    this.setState({modalType: modalType}, function() {
      console.log("App modalType: " + modalType);
    });
  }

  updateContactList = (data) => {
    let contactList = this.state.contactList;
    let isNewId = contactList.findIndex((n) => n.id === data.id);
    (isNewId === -1) ? contactList.push(data) : contactList.splice((isNewId), 1, data);
    this.setState({ contactList: contactList, contactsLength: contactList.length}, function() {
      console.log("App new total: " + this.state.contactsLength, (isNewId === -1) ? "| App new contact: " + JSON.stringify(data) : "| Edited contact: " + JSON.stringify(data));
    });
    return true;
  }

  hideModal = () => {
    this.setState({modalType: null, selectedContact: null}, function() {
      console.log("App hideModal setState.modalType: " + this.state.modalType);
    });
  }

  render() {
    let contact = this.state.selectedContact ? this.state.selectedContact.contactName : "None";
    return (
      <div className="App">
        {this.state.modalType ? (
          <Modal
            updateContacts={this.updateContactList}
            callContact={this.state.callContact}
            selectedContact={this.state.selectedContact}
            contactList={this.state.contactList}
            contactsLength={this.state.contactsLength}
            hideModal={this.hideModal}
            modalType={this.state.modalType}
          />
        ) : (
          <div className="App-Container">
            <SearchContacts contactList={this.state.contactList} filterContacts={this.filterContacts} />
            <div className="info"><i>Info: <small>Contacts: {this.state.contactsLength} | Selected: {contact}</small></i></div>
            <ContactContainers contactList={this.state.contactList} selectedContact={this.selectHandler} callContact={this.callHandler} />
            {!this.state.selectedContact ? (
              <Button buttonAction={() => this.openModal("ADD_CONTACT")}>Add Contact</Button>
            ):(
              <Button buttonAction={() => this.openModal("EDIT_CONTACT")}>Edit Contact</Button>
            )}
          </div>
        )}
      </div>
    );
  }
}

export default App;
