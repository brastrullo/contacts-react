import React, { Component } from 'react';

class AddContactBtn extends Component {
  callHandler = (e) => {
    e.preventDefault();
    this.props.handleCall(e.target.innerHTML);
  }

  addContactModal = (e) => {
    e.preventDefault();
    this.props.handleBtn("ADD_CONTACT");
    console.log("Clicked AddContactBtn");
  }

  render() {
    return (
      <button onClick={this.addContactModal}>Add Contact</button>
    );
  }
}

export default AddContactBtn;
