import React, { Component } from 'react';

class SearchContacts extends Component {
  constructor(props) {
    super(props);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.state = { contactList: props.contactList };
  }

  handleKeyPress(e) {
    var query = document.querySelector('#searchContacts').value.replace(/[^a-zA-Z0-9 ]/g, "");
    var filtered = this.state.contactList.filter((contact) =>
      contact.contactName.toLowerCase().indexOf(query.toLowerCase()) > -1 ||
      contact.contactCell.indexOf(query) > -1
    );
    this.props.filterContacts(filtered);
  }

  render() {
    return (
      <input id="searchContacts" type="text" onKeyUp={this.handleKeyPress}/>
    );
  }
}

export default SearchContacts;
