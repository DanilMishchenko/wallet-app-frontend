import styled from 'styled-components';
import { TRANSACTION_TYPES } from './table-helpers';

export const Tab = styled.div`
  width: 100%;
  height: 100%
  margin-top: 27px;
  overflow:hidden;
  @media screen and (min-width: 768px) {
    margin-top: 76px;
  }
  @media screen and (min-width: 1280px) {
    overflow-y: auto;
    height: 60vh;
    margin-top: 46px;
    margin-left: 30px;
  }
  th:last-child,
  td:last-child {
    border-right: 0;
  }
`;
export const TabMobile = styled.div`
  position: relative;
  margin-left: auto;
  margin-right: auto;
  display: table;
  width: 280px;
  margin-top: 30px;
  table-layout: fixed;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;
export const TableBodyMobile = styled.tbody`
  position: relative;
  display: table;
  width: 280px;
  table-layout: fixed;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const Table = styled.table`
  display: none;
  border-spacing: 0px;
  width: 688px;
  table-layout: fixed;
  overflow: hidden;
  word-wrap: break-word;
  padding: 10px;
  text-align: center;
  @media screen and (max-width: 768px) {
    width: 50%;
  }
  @media screen and (min-width: 768px) {
    display: table;
  }
`;
export const TableMobile = styled.table`
  background: #ffffff;
  opacity: 0.8;
  border-radius: 10px;
  margin-bottom: 10px;
  table-layout: fixed;
  width: 300px;
  word-wrap: break-word;
  ${props =>
    props.type === TRANSACTION_TYPES.add
      ? `border-left: 5px solid #24cca7`
      : `border-left: 5px solid #ff6596;`}
`;

export const TableHeader = styled.thead`
  background: #ffffff;
  th:first-child {
    background: #ffffff;
    border-top-left-radius: 30px;
    border-bottom-left-radius: 30px;
  }
  th:last-child {
    background: #ffffff;
    border-top-right-radius: 30px;
    border-bottom-right-radius: 30px;
  }
  th {
    padding: 10px 0;
    text-align: center;
  }
`;
export const ColumnHeader = styled.th`
  font-family: Circe;
  font-size: 18px;
  font-weight: 700;
  line-height: 27px;
  @media screen and (max-width: 768px) {
    text-align: left;
    padding-left: 20px;
    padding-top: 10px;
    padding-bottom: 10px;
  }
`;
export const ColumnHeaderContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ColumnHeaderMobile = styled.td`
  font-family: Circe;
  font-size: 18px;
  font-weight: 700;
  line-height: 27px;
  border-bottom: 1px solid #dcdcdf;
  @media screen and (max-width: 768px) {
    text-align: left;
    padding-left: 10px;
    padding-top: 10px;
    padding-bottom: 10px;
  }
`;

export const Column = styled.td`
  font-family: Circe;
  font-size: 16px;
  font-weight: 400;
  line-height: 54px;
  word-wrap: break-word;
  color: #000;
  :nth-child(5) {
    ${props =>
      props.type === TRANSACTION_TYPES.add
        ? `color : #24cca7;`
        : `color:#ff6596;`}
  }
`;
export const ColumnMobile = styled.td`
  text-align: right;
  line-height: 24px;
  padding-right: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid #dcdcdf;
  ${props => {
    if (props.type === TRANSACTION_TYPES.add) {
      return `color : #24cca7;`;
    } else if (props.type === TRANSACTION_TYPES.minus) {
      return `color:#ff6596;`;
    } else {
      return `color:#000;`;
    }
  }}
`;

export const Row = styled.tr`
  :not(:last-child) {
    border: 1px solid #dcdcdf;
    box-shadow: 0px 1px 0px rgba(255, 255, 255, 0.6);
  }
`;
export const RowMobile = styled.tr`
  table-layout: fixed;
`;
