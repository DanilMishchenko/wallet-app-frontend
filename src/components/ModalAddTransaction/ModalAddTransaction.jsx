import { useEffect } from 'react';
import { createPortal } from 'react-dom';

import { Overlay } from './ModalAddTransition.styled';

const modalRoot = document.querySelector('#modal-transaction');

export const ModalAddTransaction = ({ onModal }) => {
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        onModal();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onModal]);

  const handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      onModal();
    }
  };
  return createPortal(
    <Overlay onClick={handleBackdropClick}>
      <h1>ModalAddTransaction</h1>
      <button onClick={() => onModal()}>exit</button>
    </Overlay>,
    modalRoot,
  );
};
