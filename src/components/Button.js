import React, { Component } from 'react';
import '../styles/Button.css'

class Button extends Component {
  buttonAction = () => {
    console.log("Clicked \"" + this.props.children + "\" button.");
    this.props.buttonAction();
  }

  render() {
    let btnClasses = this.props.className ? "btn " + this.props.className : "btn";
    return (
      <button {...this.props} onClick={this.buttonAction} className={btnClasses}>
        <span className="btn-text">{this.props.children}</span>
    </button>
  );
  }
}

export default Button;
