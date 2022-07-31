import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  align-items: center
`

const LogoIcon = styled.div`
  height: 30px;
  width: 30px;
  border: none;
  padding: 0;

    @media (min-width: 768px) {
      height: 40px;
      width: 40px;
    }
`

const Title = styled.h1`
  margin: 0;
  margin-left: 16px;
  font-size: 16px;
  font-weight: 700;
  line-height: 1.5;

    @media (min-width: 768px) {
      font-size: 30px;
      margin-left: 20px;
    }
`

const LogoSection = () => (
  <Wrapper>
    <LogoIcon>
      <img src="images/icons/navigation/logo.svg" alt="logo"/>
    </LogoIcon>
    <Title>Wallet</Title>
  </Wrapper>
)

export default LogoSection
