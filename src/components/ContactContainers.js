import React, { Component } from 'react';
class ContactContainers extends Component {
  constructor(props) {
    super(props);
    this.callHandler = this.callHandler.bind(this);
    this.contactArray = this.contactArray.bind(this);
  }

  contactArray() {
    return (
      this.props.contactList.map(contactObj =>
        <li key={contactObj.id} id={contactObj.id} className="Contact-item" onClick={this.callHandler}>{contactObj.contactName}</li>
    ));
  }
  callHandler(e) {
    e.preventDefault();
    this.props.handleCall(e.target.innerHTML);
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
