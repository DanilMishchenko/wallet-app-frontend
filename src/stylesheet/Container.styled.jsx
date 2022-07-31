import styled from 'styled-components';

export const Container = styled.div`
  padding-right: 20px;

  @media screen and (min-width: 320px) {
    width: 320px;
  }

  @media screen and (min-width: 768px) {
    width: 768px;
    padding-right: 32px;
  }

  @media screen and (min-width: 1280px) {
    width: 1280px;
    padding-right: 16px;
  }
`;
