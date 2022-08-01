import React from 'react'
import logoApp from '../../../images/logoApp.svg'
import { Wrapper, LogoIcon, Title } from './LogoSection.styled'

const LogoSection = () => (
  <Wrapper>
    <LogoIcon>
      <img src={logoApp} alt="logo"/>
    </LogoIcon>
    <Title>Wallet</Title>
  </Wrapper>
)

export default LogoSection
