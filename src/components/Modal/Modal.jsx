import { createPortal } from 'react-dom';
import React, { Component } from 'react';
import s from './Modal.module.css';

const modalContainer = document.getElementById('modal');

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleModalClose);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleModalClose);
  }
  handleModalClose = e => {
    if (e.target === e.currentTarget || e.code === 'Escape') this.props.setModalInfo();
  };

  render() {
    const { modalInfo } = this.props;
    const { largeImageURL, tags } = modalInfo;

    return createPortal(
      <div className={s.Overlay} onClick={this.handleModalClose}>
        <div className={s.Modal}>
          <img src={largeImageURL} alt={tags} />
        </div>
      </div>,
      modalContainer
    );
  }
}

export default Modal;
