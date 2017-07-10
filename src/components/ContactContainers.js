import React, { Component } from 'react';
import ContactOptions from './ContactOptions';

class ContactContainers extends Component {
  constructor(props) {
    super(props);
    this.state = { contactList: this.props.contactList, selectedContact: null };
  }

  contactArray = () => {
    return (
      this.props.contactList.map(obj =>
        <li key={obj.id} id={obj.id} className="Contact-item" onClick={() => this.selectContact(obj.id)}>
          {obj.contactName}
          {this.state.selectedContact === obj && <ContactOptions contact={this.state.selectedContact} handleCall={this.props.callContact}/>}
        </li>
    ));
  }
  selectContact = (n) => {
    let contactList = this.state.contactList;
    let contact = contactList.find((obj) => obj.id === n);

    if (this.state.selectedContact === null) {
      this.setState({selectedContact: contact}, () => this.props.selectedContact(this.state.selectedContact));
    } else if (this.state.selectedContact.id === n) {
      this.setState({selectedContact: null}, () => this.props.selectedContact(this.state.selectedContact));
    } else {
      document.getElementsByClassName("selected")[0].classList.remove("selected");
      this.setState({selectedContact: contact}, () => this.props.selectedContact(this.state.selectedContact));
    }
    document.getElementById(n) ? document.getElementById(n).classList.toggle("selected") : false;
  }

  render() {
    return (
      <div>
        <ul className="Contact-containers">{this.contactArray()}</ul>
      </div>
    );
  }
}

export default ContactContainers;
