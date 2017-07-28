import React, { Component } from 'react';

class SearchContacts extends Component {
  constructor(props) {
    super(props);
    this.state = { contactList: props.contactList };
  }

  handleKeyPress = (e) => {
    let query = document.querySelector('#searchContacts').value.replace(/[^a-zA-Z0-9 ]/g, "");
    let filtered = this.state.contactList.filter((contact) =>
      contact.contactName.toLowerCase().includes(query.toLowerCase()) ||
      contact.contactCell.includes(query)
    );
    this.props.filterContacts(filtered);
  }

  render() {
    return (
      <input
        className="Search-contacts"
        id="searchContacts"
        placeholder="Search Contacts"
        type="search"
        onInput={this.handleKeyPress}
        onFocus={() => this.props.selectHandler(null)}
      />
    );
  }
}

export default SearchContacts;
