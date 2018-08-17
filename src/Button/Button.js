import React, { Component } from 'react';
import './Button.css';

class Button extends Component {
  render () {
    return (
      <button className={'Button ' + this.props.className} onClick={this.props.click}>
        {this.props.buttonText}
      </button>
    );
  }
}

export default Button;
