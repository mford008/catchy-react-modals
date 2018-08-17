import React, { Component } from 'react';
import './Modal.css';
import Button from '../Button/Button.js';

class Modal extends Component {
  render () {
    const style = {
      display: 'none'
    };
    if (this.props.visible) {
      style.display = 'block';
    }

    return (
      <div className='Modal' style={style}>
        <div className='Modal-backdrop'
          onClick={this.props.hideModal} />
        <div className={'Modal-body ' + this.props.className}>
          <div className='Modal-header'>
            <p>{this.props.title}</p>
          </div>
          <div className='Modal-content'>
            {this.props.children}
          </div>
          <div className='Modal-button'>
            <Button
              className='ModalClose'
              click={this.props.hideModal}
              buttonText={'Close'} />
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
