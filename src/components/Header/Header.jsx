import React from 'react';
import styled from 'styled-components';
import LogoSection from './LogoSection/LogoSection';
import AccountSection from './AccountSection/AccountSection';
import { ModalLogout } from '../ModalLogout/ModalLogout';

import { useSelector } from 'react-redux';

import { useDispatch } from 'react-redux';
import { modalLogout } from '../../redux/global/globalSlice';
import { getIsModalLogoutOpen } from '../../redux/global/globalSlice';
const Wrapper = styled.div`
  position: fixed;
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 20px 16px;
  background-color: var(--primary-text);

  @media (min-width: 768px) {
    position: static;
    padding: 20px 32px;
  }

  @media (min-width: 1200px) {
    padding: 20px 16px;
  } ;
`;

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
