import React, { Component } from 'react';

class Button extends Component {
  buttonAction = () => {
    console.log("Clicked \"" + this.props.children + "\" button.");
    this.props.buttonAction();
  }

  render() {
    return (
      <button onClick={this.buttonAction}>{this.props.children}</button>
    );
  }
}

export default Button;
