import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useDispatch } from 'react-redux';

import { globalActions } from '../../redux/global';
import styles from './Modal.module.css';

export default function Modal({ children }) {
  const dispatch = useDispatch();

  const closeModal = () => {
    dispatch(globalActions.closeModalAddTransaction());
    dispatch(globalActions.closeModalLogout());
  };

  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        closeModal();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      closeModal();
    }
  };

  const modalRoot = document.querySelector('#modal-root');
  return createPortal(
    <div
      id="backdrop"
      className={styles.backdrop}
      onClick={handleBackdropClick}
    >
      {children}
    </div>,
    modalRoot,
  );
}
