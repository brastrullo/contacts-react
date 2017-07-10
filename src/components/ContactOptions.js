import React, { Component } from 'react';
import Button from './Button';

class ContactOptions extends Component {
  constructor(props) {
    super(props);
    this.state = { contact: this.props.contact };
  }
    callContact = () => {
      let contact = this.state.contact;
      this.props.handleCall([contact.contactName, contact.contactCell], function() {
        console.log("Contact object: " + JSON.stringify(contact));
      });
    }
  render() {
    return (
      <div>
        <Button buttonAction={this.callContact}>Call</Button>
      </div>
    );
  }
}

export default ContactOptions;
