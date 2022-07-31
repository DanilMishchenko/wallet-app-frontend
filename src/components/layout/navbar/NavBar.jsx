import React from 'react'
import styled from 'styled-components'
import LogoSection from './LogoSection/LogoSection'
import AccountSection from './AccountSection/AccountSection'

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
    };

    @media (min-width: 1200px) {
      padding: 20px 16px;
    };
`

const NavBar = () => (
  <Wrapper>
      <LogoSection/>
      <AccountSection/>
  </Wrapper>
)

export default NavBar
