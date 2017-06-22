import React, { Component } from 'react';

class AddContactBtn extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <button onClick={this.addContact}>Add Contact</button>
    );
  }
}

export default AddContactBtn;
