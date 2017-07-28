import React, { Component } from 'react';
import Form from './Form';

class AddContactModal extends Component {
  render() {
    return(
      <div className="flex-container">
        <Form {...this.props} />
      </div>
    );
  }
}

export default AddContactModal;
