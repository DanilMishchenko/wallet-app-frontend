import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'


const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding-top: 40px;
  padding-left: 20px;

    @media (min-width: 768px) {
      padding-left: 32px;
    }

    @media (min-width: 1280px) {
      min-height: calc(100vh - 105px);
      min-width: 480px;
      padding-left: 20px;
      border-right: 1px solid var(--outline);
      box-shadow: -1px 0px 0px  rgba(0, 0, 0, 0.05), 1px 0px 0px rgba(255, 255, 255, 0.6);
    };
`

const Content = styled.h1`
    margin: 0
`

const SideBar = ({children}) => (
  <Wrapper>
    <Content>SideBar</Content>
    {children}
    {/* if auth ? {currenty} : {picture}*/}
  </Wrapper>
)

SideBar.propTypes = {
  children: PropTypes.element,
}

export default SideBar
