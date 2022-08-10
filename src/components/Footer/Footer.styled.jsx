import styled from 'styled-components';

export const Wrapper = styled.footer`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 60px;
  padding: 10px;

  @media screen and (min-width: 768px) {
    height: 80px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  line-height: 1;
`;

export const RedHeart = styled.span`
  font-size: 30px;
  color: red;
  margin-left: 5px;
  margin-right: 5px;
`;

export const BlueHeart = styled.span`
  font-size: 30px;
  color: #4a56e2;
  margin-left: 5px;
  margin-right: 2px;
`;

export const YellowHeart = styled.span`
  font-size: 30px;
  color: #ebe115df;
  margin-right: 5px;
`;

export const Team = styled.span`
  margin-left: 5px;
  margin-right: 5px;
  font-weight: 600;
`;
