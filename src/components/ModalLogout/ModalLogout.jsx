import { useDispatch } from 'react-redux';
import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import authOperations from '../../redux/auth/auth-operations';
import { useNavigate } from 'react-router-dom';

import { PrimaryButton } from '../PrimaryButton/PrimaryButton';
import { SecondaryButton } from '../SecondaryButton/SecondaryButton';

import { Overlay, Mod, Title, Wrapper, H, Div } from './ModalLogout.styled';
import logo from '../../images/logoApp.svg';

const modalRoot = document.querySelector('#modal-logout');

export const ModalLogout = ({ onModal }) => {
  const navigate = useNavigate();

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
  const dispatch = useDispatch();

  const logOut = () => {
    dispatch(authOperations.logOut());
    navigate('/login');
    onModal();
  };
  return createPortal(
    <Overlay onClick={handleBackdropClick}>
      <Mod>
        <Wrapper>
          <img src={logo} alt="girl" />
          <Title>Wallet</Title>
        </Wrapper>
        <H>Are you sure you want to leave?</H>

        <PrimaryButton textBtn="yes" onClick={logOut} />
        <Div>
          <SecondaryButton textBtn="no" onClick={() => onModal()} />
        </Div>
      </Mod>
    </Overlay>,
    modalRoot,
  );
};
