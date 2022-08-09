import styled from 'styled-components';

export const TableWrapper = styled.div`
  font-family: 'Circe';
  font-weight: 400;
  font-size: 16px;
  line-height: 18px;
  color: var(--common-text);

  & ul {
    list-style: none;
  }

  @media screen and (min-width: 768px) {
    width: 336px;
  }

  @media screen and (min-width: 1280px) {
    width: 395px;
  }
`;

export const TableTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 30px;
  padding: 16px 20px;
  background-color: var(--primary-text);
  font-weight: 700;
  font-size: 18px;
  line-height: 27px;
`;

export const TableList = styled.ul`
  margin: 0;
`;

export const TableListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 14px 20px;
  border-bottom: 1px solid #dcdcdf;
  box-shadow: 0px 1px 0px rgba(255, 255, 255, 0.6);
  margin-bottom: 1px;
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

export const ResultList = styled.ul`
  padding: 0 20px;
`;

export const ExpensesItem = styled.li`
  padding-top: 16px;
  padding-bottom: 14px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: 'Circe';
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  color: var(--common-text);
`;

export const IncomeItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: 'Circe';
  font-weight: 700;
  font-size: 16px;
  line-height: 18px;
  color: var(--common-text);
`;

export const ResultAccentItem = styled.span`
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  color: ${props => props.color || 'var(--common-text)'};
`;
