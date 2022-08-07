// import { useDispatch, useSelector } from 'react-redux/es/exports';

import {
  TableWrapper,
  TableTitle,
  TableList,
  TableListItem,
  CategoryWrapper,
  CategoryColorLabel,
  ResultList,
  ExpensesItem,
  IncomeItem,
  ResultAccentItem,
} from './Table.styled';

export const Table = ({ tableData }) => {
  return (
    <TableWrapper>
      <TableTitle>
        <h2>Category</h2>
        <h2>Sum</h2>
      </TableTitle>

      <TableList>
        {tableData.map(({ color, category, sum }) => {
          return (
            <TableListItem key={category}>
              <CategoryWrapper>
                <CategoryColorLabel background={color}></CategoryColorLabel>
                <span>{category}</span>
              </CategoryWrapper>
              <span>{sum}</span>
            </TableListItem>
          );
        })}
      </TableList>

      <ResultList>
        <ExpensesItem>
          Expenses:
          <ResultAccentItem color={'var(--expense)'}>
            22 549.24
          </ResultAccentItem>
        </ExpensesItem>
        <IncomeItem>
          Income:
          <ResultAccentItem color={'var(--green)'}>27 350.00</ResultAccentItem>
        </IncomeItem>
      </ResultList>
    </TableWrapper>
  );
};
