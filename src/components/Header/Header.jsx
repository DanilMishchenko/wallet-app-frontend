import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { modalLogout } from '../../redux/global/globalSlice';
import { getIsModalLogoutOpen } from '../../redux/global/globalSlice';
import { LogoSection } from './LogoSection/LogoSection';
import { AccountSection } from './AccountSection/AccountSection';
import { ModalLogout } from '../ModalLogout/ModalLogout';

import { Wrapper } from './Header.styled';

export const Header = () => {
  const dispatch = useDispatch();

  const ModalLogoutOpen = useSelector(getIsModalLogoutOpen);
  const onModal = () => {
    dispatch(modalLogout(true));
  };
  const onModalClose = () => {
    dispatch(modalLogout(false));
  };

  return (
    <>
      <Wrapper>
        <LogoSection />
        <AccountSection onModal={onModal} />
      </Wrapper>
      {ModalLogoutOpen && <ModalLogout onModal={onModalClose} />}
    </>
  );
};
