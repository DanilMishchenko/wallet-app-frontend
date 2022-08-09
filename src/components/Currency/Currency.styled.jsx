import styled from 'styled-components';
import wave from '../../assets/images/wave.svg';

export const CurrencyLayout = styled.div`
  width: 380px;
  height: 175px;
  overflow: hidden;
  background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.2) -7.46%,
      rgba(255, 255, 255, 0) 100%
    ),
    url(${wave}) bottom left no-repeat, var(--blue);
  border-radius: 30px;
  @media (min-width: 768px) {
    width: 336px;
    height: 182px;
  }
  @media (min-width: 1280px) {
    width: 393px;
    height: 347px;
  } ;
`;

export const TableContainer = styled.table`
  width: 100%;
  border-spacing: 0;
  color: var(--primary-text);
  line-height: 1.43;
`;

export const TableHead = styled.thead`
  color: var(--primary-text);
  background: rgba(255, 255, 255, 0.2);
  font-size: 18px;
  text-transform: capitalize;
  text-align: center;
`;

export const TableHeadText = styled.td`
  padding: 10px 0px;
  min-width: 70px;
  @media (min-width: 768px) {
    padding: 16px 0px;
  } ;
`;

export const TableRow = styled.tr`
  font-size: 16px;
`;

export const TableData = styled.td`
  text-align: center;
  padding-top: 12px;
  @media (min-width: 768px) {
    padding-top: 12px;
  }
  @media (min-width: 1280px) {
    padding-top: 24px;
  } ;
`;

export const WrapperLoader = styled.div`
  position: relative;
  top: 30%;
`;
