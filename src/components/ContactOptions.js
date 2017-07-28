import React, { Component } from 'react';
import Button from './Button';

class ContactOptions extends Component {
  constructor(props) {
    super(props);
    this.state = { contact: props.contact };
  }
    callContact = () => {
      let contact = this.state.contact;
      this.props.handleCall([contact.contactName, contact.contactCell], function() {
        console.log("Contact object: " + JSON.stringify(contact));
      });
    }
  render() {
    return <Button buttonAction={this.callContact} className="Btn-CallContact">Call</Button>;
  }
}

export default ContactOptions;
