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

const colors = [
  {
    id: 1,
    color: '#FED057',
  },
  {
    id: 2,
    color: '#FFD8D0',
  },
  {
    id: 3,
    color: '#FD9498',
  },
  {
    id: 4,
    color: '#C5BAFF',
  },
  {
    id: 5,
    color: '#6E78E8',
  },
  {
    id: 6,
    color: '#4A56E2',
  },
  {
    id: 7,
    color: '#81E1FF',
  },
  {
    id: 8,
    color: '#24CCA7',
  },
  {
    id: 9,
    color: '#00AD84',
  },
];

export const Table = ({ tableData }) => {
  return (
    <TableWrapper>
      <TableTitle>
        <h2>Category</h2>
        <h2>Sum</h2>
      </TableTitle>

      <TableList>
        {tableData.map(({ id, category, sum }) => {
          return (
            <TableListItem key={id}>
              <CategoryWrapper>
                <CategoryColorLabel background={colors.id}></CategoryColorLabel>
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
