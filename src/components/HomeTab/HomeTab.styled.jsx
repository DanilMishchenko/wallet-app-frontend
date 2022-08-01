import styled from 'styled-components';

export const Tab = styled.div`
  width: 100%;
  margin-top: 27px;

  @media screen and (min-width: 768px) {
    margin-top: 76px;
  }
  @media screen and (min-width: 1280px) {
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
  table-layout: fixed;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;
export const TableBodyMobile = styled.tbody`
  position: relative;
  margin-left: auto;
  margin-right: auto;
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
    props.type === '+'
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
export const ColumnHeaderMobile = styled.td`
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

export const Column = styled.td`
  font-family: Circe;
  font-size: 16px;
  font-weight: 400;
  line-height: 54px;
  word-wrap: break-word;
  color: #000;
  @media screen and (max-width: 768px) {
    text-align: right;
    line-height: 24px;
    padding-right: 20px;
    padding-top: 10px;
    padding-bottom: 10px;
  }
  :nth-child(5) {
    ${props => (props.type === '+' ? `color : #24cca7;` : `color:#ff6596;`)}
  }
`;

export const Row = styled.tr`
  :not(:last-child) {
    border: 1px solid #dcdcdf;
    box-shadow: 0px 1px 0px rgba(255, 255, 255, 0.6);
  }
`;
export const RowMobile = styled.tr`
  width: 280px;
  table-layout: fixed;
  margin-top: 0px;
`;
