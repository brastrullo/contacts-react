import React, { Component } from 'react';

class formValidator extends Component {
  constructor(props) {
    super(props);
    let name = this.props.selectedContact.contactName;
    let cell = this.props.selectedContact.contactCell;
    this.state = {
      errorMsg: null,
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
    return <span>{this.errorMsg}</span>;
  }
}

export default formValidator;
