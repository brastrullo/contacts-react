import React, { Component } from 'react';

class EditContactBtn extends Component {
  callHandler = (e) => {
    e.preventDefault();
    this.props.handleCall(e.target.innerHTML);
  }

  EditContactModal = (e) => {
    e.preventDefault();
    this.props.handleBtn("EDIT_CONTACT");
    console.log("Clicked EditContactBtn");
  }

  render() {
    return (
      <button onClick={this.EditContactModal}>Edit Contact</button>
    );
  }
}

export default EditContactBtn;
