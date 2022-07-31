import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import NavBar from '../navbar/NavBar'
import Sidebar from '../sidebar/SideBar'
import { Container } from '../../../stylesheet/Container.styled'
import BlurBackground from './BlurBackground.styled'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const MainSection = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 70px;

    @media (min-width: 768px) {
      min-height: 1024px;
      padding-top: 0;
    };
    @media (min-width: 1280px) {
      display: flex;
      min-height: calc(100vh - 105px);
    };
`

const MainContent = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px;

    @media (min-width: 768px) {
      padding: 32px;
    };
    @media (min-width: 1280px) {
      padding: 46px 70px;
    };
`

const Dashboard = ({children}) => (
  <Wrapper>
    <NavBar/>
    <Container>
      <MainSection>
        <Sidebar/>
        <MainContent>
          {children}
        </MainContent>
      </MainSection>
    </Container>
    <BlurBackground/>
  </Wrapper>
)

Dashboard.propTypes = {
  children: PropTypes.element,
}

export default Dashboard
