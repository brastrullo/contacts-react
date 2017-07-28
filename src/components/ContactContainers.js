import React, { Component } from 'react';
import ContactOptions from './ContactOptions';

class ContactContainers extends Component {
  constructor(props) {
    super(props);
    this.state = { contactList: props.contactList, selected: props.selected };
  }

  contactArray = () => {
    var list = this.props.contactList;
    return (
      list.map(obj =>
        <li key={obj.id} id={obj.id} className={"Contact-item " + ((this.props.selected === obj) ? "selected" : "")} onClick={() => this.selectContact(obj.id)}>
          {this.props.selected === obj && <div className='Profile-pic'>{obj.contactName.charAt(0)}</div>}
          {obj.contactName}
          {this.props.selected === obj && <ContactOptions contact={this.props.selected} handleCall={this.props.callContact}/>}
        </li>
    ));
  }
  selectContact = (n) => {
    let contactList = this.state.contactList;
    let contact = contactList.find((obj) => obj.id === n);
    let selectedContainer = document.getElementsByClassName("selected")[0];

    if (this.state.selected === null) {
      this.setState({selected: contact}, () => this.props.selectHandler(contact));
    } else if (this.state.selected.id === n) {
      this.setState({selected: null}, () => this.props.selectHandler(null));
    } else {
      this.setState({selected: contact}, () => this.props.selectHandler(contact));
    }
  }

  render() {
    return (
      <div>
        <ul className="Contact-containers">{this.contactArray()}</ul>
      </div>
    );
  }
}

export default ContactContainers;
