import React, { Component } from 'react';

class EditContactModal extends Component {
  constructor(props) {
    super(props);
    let name = this.props.selectedContact.contactName;
    let cell = this.props.selectedContact.contactCell;
    this.state = {
      selectedContact: this.props.selectedContact,
      name: name,
      cell: cell
    }
  }
  handleChange = (e) => {
    let target = e.target;
    let value = target.value;
    let name = target.name;
    let cell = target.cell;
    this.setState({[name]: value});
  }

  validateForm = (e) => {
    e.preventDefault();
    const id = this.state.selectedContact.id;
    const name = this.state.contact_name ? this.state.contact_name : this.props.selectedContact.contactName;
    const cell = this.state.contact_cell ? this.state.contact_cell : this.props.selectedContact.contactCell;
    const data = {id: id, contactName: name, contactCell: cell};
    console.log("Form Submitted:" + JSON.stringify(data));
    this.handleSubmit(data);
  }

  handleSubmit = (data) => {
    this.props.updateContacts(data);
    this.props.hideModal();
  }

  render() {
    return(
      <div>
        <h1>Edit Contact</h1>
        <span onClick={this.props.hideModal}>|CLOSE|</span>
        <form onSubmit={this.validateForm}>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="contact_name" onChange={this.handleChange} defaultValue={this.state.name} autoFocus />
          <label htmlFor="cell">Cell</label>
          <input type="text" id="cell" name="contact_cell" onChange={this.handleChange} defaultValue={this.state.cell} />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default EditContactModal;
