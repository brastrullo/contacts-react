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
        contactCell : '6475134823'
      },
      {
        id : 2,
        contactName : 'Papa',
        contactCell : '5195737509'
      },
      {
        id : 3,
        contactName : 'Byron',
        contactCell : '6472035855'
      },
      {
        id : 4,
        contactName : 'Barry',
        contactCell : '6477865346'
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

  selectHandler = (contact) => {
    this.setState({selectedContact: contact});
  }

  modalCtrl = (modalType) => {
    this.setState({modalType: modalType}, function() {
      console.log("App modalType: " + modalType);
    });
  }

  updateContactHandler = (contactList) => {
    this.setState({contactList: contactList, contactsLength: contactList.length
    }, function() {
      console.log("App new total: " + this.state.contactsLength);
    });
    return true;
  };

  hideModal = () => {
    this.setState({modalType: null, selectedContact: null});
  }

  render() {
    let contact = this.state.selectedContact ? this.state.selectedContact.contactName : "None";
    return (
      <div className="App">
        {this.state.modalType ? (
          <Modal
            modalCtrl={this.modalCtrl}
            updateContacts={this.updateContactHandler}
            callContact={this.state.callContact}
            selectedContact={this.state.selectedContact}
            contactList={this.state.contactList}
            hideModal={this.hideModal}
            modalType={this.state.modalType}
          />
        ) : (
          <div className="App-Container">
            <div className="Header">Chattap!</div>
            <SearchContacts contactList={this.state.contactList} filterContacts={this.filterContacts} selectHandler={this.selectHandler} />
            {/* <div className="info"><i>Info: <small>Contacts: {this.state.contactsLength} | Selected: {contact}</small></i></div> */}
            <ContactContainers contactList={this.state.contactList} selected={this.state.selectedContact} selectHandler={this.selectHandler} callContact={() => this.modalCtrl("CALL_CONTACT")} />
            {!this.state.selectedContact ? (
              <Button buttonAction={() => this.modalCtrl("ADD_CONTACT")}>Add Contact</Button>
            ):(
              <Button buttonAction={() => this.modalCtrl("EDIT_CONTACT")}>Edit Contact</Button>
            )}
          </div>
        )}
      </div>
    );
  }
}

export default App;
