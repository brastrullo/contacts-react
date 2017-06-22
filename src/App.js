import React, { Component } from 'react';
import ContactContainers from './components/ContactContainers';
import CallContactModal from './components/Modal-CallContact';
import SearchContacts from './components/SearchContacts';
import AddContactBtn from './components/AddContactBtn';
import './styles/AppContainer.css'
import './styles/Modal.css';
import './styles/ContactContainers.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.callHandler = this.callHandler.bind(this);
    this.updateContactList = this.updateContactList.bind(this);
    this.hideModal = this.hideModal.bind(this);
    this.filterContacts = this.filterContacts.bind(this);
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
      showModal: false,
      contactList: contactList
    }
  }

  filterContacts(filteredContacts) {
    this.setState({ contactList: filteredContacts});
  }

  callHandler(contact) {
    this.setState({ callContact: contact, showModal: true});
    console.log("App callHandler: " + contact);
  }

  updateContactList(props) {
    var contactList = props.contactList;
    this.setState({ contactList: contactList});
    console.log("Contact List: " + contactList);
    return true;
  }

  hideModal() {
    this.setState({showModal: false});
    console.log("App showModal: " + this.state.showModal);
  }

  render() {
    return (
      <div className="App">
        {this.state.showModal ? (
          <CallContactModal callContact={this.state.callContact} handleModal={this.hideModal} />
        ) : (
          <div className="App-Container">
            <SearchContacts contactList={this.state.contactList} filterContacts={this.filterContacts} />
            <ContactContainers contactList={this.state.contactList} handleCall={this.callHandler} />
            <AddContactBtn  handleBtn={this.updateContactList} />
          </div>
        )}
      </div>
    );
  }
}

export default App;
