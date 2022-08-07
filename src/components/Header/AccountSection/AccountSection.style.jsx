import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Title = styled.div`
  margin: 0;
  padding: 0;
  margin-right: 8px;
  font-size: 12px;
  height: 40px;
  width: 40px;
  overflow: hidden;
  color: var(--primary-text);

  @media (min-width: 768px) {
    color: var(--secondary);
    font-size: 18px;
    line-height: 1.5;
    height: auto;
    width: 100%;
    overflow: clip;
  }

  @media (max-width: 767px) {
    &:first-letter {
      margin: 0;
      font-size: 18px;
      line-height: 43px;
      border-radius: 50%;
      padding: 5px 10px;
      border: 1px solid #ccc;
      color: var(--secondary);
    }
  }
`;

export const Logout = styled.button`
  display: flex;
  align-items: center;
  padding: 0;
  margin: 0;
  color: var(--secondary);
  background-color: unset;
  border: none;
  font-size: 18px;
  line-height: 1.47;
  cursor: pointer;

  @media (min-width: 768px) {
    border-left: 1px solid var(--secondary);
    display: flex;
  } ;
`;

export const IconWrap = styled.div`
  width: 18px;
  height: 18px;

  @media (min-width: 768px) {
    display: block;
    margin-left: 8px;
  } ;
`;

export const LogoutText = styled.p`
  padding: 0;
  margin: 0;
  display: none;

  @media (min-width: 768px) {
    display: block;
    margin-left: 8px;
  } ;
`;
