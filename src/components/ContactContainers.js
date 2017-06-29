import React, { Component } from 'react';

class ContactContainers extends Component {
  contactArray = () => {
    return (
      this.props.contactList.map(contactObj =>
        <li key={contactObj.id} id={contactObj.id} className="Contact-item" onClick={this.callHandler}>{contactObj.contactName}</li>
    ));
  }
  callHandler = (e) => {
    e.preventDefault();
    var contactList = this.props.contactList;
    var contact = contactList.find(function(obj) { return obj.contactName === e.target.innerHTML});
    console.log("Contact object: " + [contact.contactName, contact.contactCell].toString());
    this.props.handleCall([contact.contactName, contact.contactCell]);
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
