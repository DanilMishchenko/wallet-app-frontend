import styled from 'styled-components';

export const TableWrapper = styled.div`
  font-family: 'Circe';
  font-style: normal;
  font-weight: 400;
  /* font-size: 18px; */
  /* line-height: 27px; */
  color: var(--common-text);

  & ul {
    list-style: none;
  }
`;

export const TableTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: var(--primary-text);
  border-radius: 30px;
  padding: 16px 20px;
`;

export const TableList = styled.ul`
  margin: 0;
  padding: 0 20px;
`;

export const TableListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 14px 0;
  border-bottom: 1px solid #dcdcdf;
  box-shadow: 0px 1px 0px rgba(255, 255, 255, 0.6);
  margin-bottom: 1px;

  //??
  & span {
    display: block;
  }
`;

export const CategoryWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const CategoryColorLabel = styled.span`
  width: 24px;
  height: 24px;
  background-color: ${props => props.background || 'var(--common-text)'};
  margin-right: 16px;
`;
