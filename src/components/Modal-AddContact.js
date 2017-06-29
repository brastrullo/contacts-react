import React, { Component } from 'react';

class AddContactModal extends Component {
  constructor(props) {
    super(props);
    this.state = { contactsLength: this.props.contactsLength };
  }

  handleInputChange = (e) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;
    const cell = target.cell;
    this.setState({[name]: value});
  }

  validateForm = (e) => {
    e.preventDefault();
    const id = this.state.contactsLength + 1;
    const name = this.state.contact_name;
    const cell = this.state.contact_cell;
    const data = {id: id, contactName: name, contactCell: cell};
    console.log("Form Submitted:" + JSON.stringify(data));
    this.handleSubmit(data);
  }

  handleSubmit = (data) => {
    this.props.addContact(data);
    this.props.hideModal();
  }

  render() {
    let msc = "msc";
    return(
      <div>
        <h1>Add Contact</h1>
        <span onClick={this.props.hideModal}>|CLOSE|</span>
        <div>Contacts: {this.state.contactsLength}</div>
        <form onSubmit={this.validateForm}>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="contact_name" onChange={this.handleInputChange} value={this.state.name} autoFocus />
          <label htmlFor="cell">Cell</label>
          <input type="text" id="cell" name="contact_cell" onChange={this.handleInputChange} value={this.state.cell} />
          <input type="submit" />
        </form>
      </div>
    );
  }

}

export default AddContactModal;
