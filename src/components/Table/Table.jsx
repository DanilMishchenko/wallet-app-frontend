import PropTypes from 'prop-types';
import { getColor } from '../../stylesheet/chartColor';
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

export const Table = ({ tableData, summaryExpenses, summaryIncome }) => (
  <TableWrapper>
    <TableTitle>
      <h2>Category</h2>
      <h2>Sum</h2>
    </TableTitle>

    <TableList>
      {tableData.map(({ category, totalSum }) => (
        <TableListItem key={category}>
          <CategoryWrapper>
            <CategoryColorLabel
              background={getColor(category)}
            ></CategoryColorLabel>
            <span>{category}</span>
          </CategoryWrapper>
          <span>{totalSum}</span>
        </TableListItem>
      ))}
    </TableList>

    <ResultList>
      <ExpensesItem>
        Expenses:
        <ResultAccentItem color={'var(--expense)'}>
          {summaryExpenses}
        </ResultAccentItem>
      </ExpensesItem>
      <IncomeItem>
        Income:
        <ResultAccentItem color={'var(--green)'}>
          {summaryIncome}
        </ResultAccentItem>
      </IncomeItem>
    </ResultList>
  </TableWrapper>
);

Table.defaultProps = {
  summaryIncome: '0',
  summaryExpenses: '0',
};

Table.propTypes = {
  tableData: PropTypes.array,
  summaryIncome: PropTypes.string,
  summaryExpenses: PropTypes.string,
};
