import React, { Component } from 'react';

class Form extends Component {
  constructor(props) {
    super(props);
    if (this.props.selectedContact) {
      let c = this.props.selectedContact;
      let name = c ? c.contactName : "";
      let cell = c ? c.contactCell : "";
      this.state = {
        name: name,
        cell: cell
      }
    }
    if (!this.props.selectedContact) {
      this.state = {
        contactList: this.props.contactList
      }
    }
  }

  handleInputChange = (e) => {
    let target = e.target;
    let value = target.value;
    let name = target.name;
    let cell = target.cell;
    this.setState({[name]: value});
    console.log(this.state);
  }

  editContact = (e) => {
    e.preventDefault();
    let contactList = this.props.contactList;
    const id = this.props.selectedContact.id;
    const name = this.state.contact_name ? this.state.contact_name : this.props.selectedContact.contactName;
    const cell = this.state.contact_cell ? this.state.contact_cell : this.props.selectedContact.contactCell;
    const newInfo = {id: id, contactName: name, contactCell: cell};
    console.log("Form Submitted:" + JSON.stringify(newInfo));
    contactList.splice((contactList.findIndex((n) => n.id === newInfo.id)), 1, newInfo);
    this.props.updateContacts(contactList);
    this.props.hideModal();
  }

  addContact = (e) => {
    e.preventDefault();
    const id = this.props.contactList.length + 1;
    const name = this.state.contact_name;
    const cell = this.state.contact_cell ? this.state.contact_cell : alert("Please enter cell.");
    const data = {id: id, contactName: name, contactCell: cell};
    if (!this.isDupe(name)) {
      if (cell) {
        console.log("Form Submitted:" + JSON.stringify(data));
        let contactList = this.props.contactList;
        contactList.push(data);
        this.props.updateContacts(contactList);
        this.props.hideModal();
      }
    } else {
      alert("Contact: \"" + name + "\" is a duplicate. Please enter new contact.");
    }
  }

  isDupe = (name) => {
    var dupe = this.props.contactList.find(obj => obj.contactName === name);
    return dupe ? true : false;
  }

  render() {
    return (
      <form className="Modal-form" onSubmit={this.props.selectedContact ? this.editContact : this.addContact}>
        <label htmlFor="name" className="form-label">Name</label>
        <input className="form-input" type="text" id="name" name="contact_name" onChange={this.handleInputChange} defaultValue={this.state.name} autoFocus />
        <label htmlFor="cell" className="form-label">Cell</label>
        <input className="form-input" type="tel" id="cell" name="contact_cell" onChange={this.handleInputChange} defaultValue={this.state.cell} />
        <input className="form-submit btn" type="submit" />
      </form>
    );
  }
}

export default Form;
