import React from 'react';

import logoApp from '../../images/logoApp.svg';
import { Wrapper, LogoLink, LogoIcon, Title } from './LogoSection.styled';

export const LogoSection = () => (
  <Wrapper>
    <LogoLink to="/home">
      <LogoIcon src={logoApp} alt="logo" />
      <Title>Wallet</Title>
    </LogoLink>
  </Wrapper>
);
