import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 280px;
  height: 280px;
  margin: 0 auto 32px;
  z-index: -1;

  @media screen and (min-width: 768px) {
    width: 336px;
    height: 336px;
    margin: 0;
  }

  @media screen and (min-width: 1280px) {
    width: 228px;
    height: 228px;
    margin: 0;
  }
`;

export const Text = styled.p`
  position: absolute;
  display: block;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: 'Circe';
  font-weight: 700;
  font-size: 18px;
  line-height: 27px;
  z-index: -1;
  color: var(--common-text);
`;
