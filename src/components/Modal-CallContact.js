import React, { Component } from 'react';

function EllipsesAnimation(){
  return (
    <div className="Ellipses-animation">
      <div className="dot dot1">.</div>
      <div className="dot dot2">.</div>
      <div className="dot dot3">.</div>
    </div>
  );
}

class CallContactModal extends Component {
  hideModal = () => {
    this.props.hideModal();
  }

  formatNumber = (num) => {
    switch (num.length) {
      case 10:
        return num.replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3");
      case 11:
        return num.replace(/(\d{1})(\d{3})(\d{3})(\d{4})/, "+$1 $2-$3-$4");
      case 12:
        return num.replace(/(\d{2})(\d{3})(\d{3})(\d{4})/, "+$1 $2-$3-$4");
      case 13:
        return num.replace(/(\d{3})(\d{3})(\d{3})(\d{4})/, "+$1 $2-$3-$4");
      default:
        console.log("Modal-CallContact unformatted number: " + num);
        return num;
    }
  }

  render() {
    let name = this.props.selectedContact.contactName;
    let num = this.props.selectedContact.contactCell;
    return(
      <div>
        <span className="calling-contact-header">Calling {name}</span>
        <div>{this.formatNumber(num)}<EllipsesAnimation /></div>
        <button className="btn Decline-call-btn" onClick={this.hideModal} >&#10006;</button>
      </div>
    );
  }

}

export default CallContactModal;
