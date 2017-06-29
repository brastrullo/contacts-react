import React, { Component } from 'react';
import ContactContainers from './components/ContactContainers';
import SearchContacts from './components/SearchContacts';
import Modal from './components/Modal';
import AddContactBtn from './components/AddContactBtn';
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
      contactsLength: contactList.length
    }
  }

  filterContacts = (filteredContacts) => {
    this.setState({ contactList: filteredContacts, contactsLength: filteredContacts.length});
  }

  callHandler = (contactArray) => {
    this.setState({ callContact: contactArray});
    this.openModal("CALL_CONTACT");
  }

  openModal = (modalType) => {
    this.setState({modalType: modalType}, function() {
      console.log("App modalType: " + modalType);
    });
  }

  updateContactList = (newContact) => {
    var contactList = this.state.contactList;
    var updatedList = contactList.push(newContact);
    this.setState({ contactList: contactList, contactsLength: contactList.length}, function() {
      console.log("App new total: " + this.state.contactsLength, "| App new contact: " + JSON.stringify(newContact));
    });
    return true;
  }

  hideModal = () => {
    this.setState({modalType: null}, function() {
      console.log("App hideModal setState.modalType: " + this.state.modalType);
    });
  }

  render() {
    return (
      <div className="App">
        {this.state.modalType ? (
          <Modal
            callContact={this.state.callContact}
            hideModal={this.hideModal}
            addContact={this.updateContactList}
            modalType={this.state.modalType}
            contactsLength={this.state.contactsLength}
          />
        ) : (
          <div className="App-Container">
            <SearchContacts contactList={this.state.contactList} filterContacts={this.filterContacts} />
            <div>Contacts: {this.state.contactsLength}</div>
            <ContactContainers contactList={this.state.contactList} handleCall={this.callHandler} />
            <AddContactBtn  handleBtn={this.openModal} />
          </div>
        )}
      </div>
    );
  }
}

export default App;
