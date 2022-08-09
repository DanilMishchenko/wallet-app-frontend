import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Select from 'react-select';

import {
  Title,
  Container,
  CategorySection,
  SelectWrapper,
  BtnWrapper,
  selectStyles,
} from './DiagramTab.styled';
import { fetchTransactionsDetails } from '../../redux/transactions/transactions-operations';
import {
  getCategories,
  getSumExpenses,
  getSumIncome,
} from '../../redux/transactions/transactions-selectors';
import { Chart } from '../Chart/Chart';
import { Table } from '../Table/Table';
import arrow from '../../assets/images/arrow.svg';
import { expenses } from '../../stylesheet/chartColor';
import {
  months,
  years,
  currentMonth,
  currentYear,
  getMonthConfig,
  getYearConfig,
  defaultCategories,
} from './constants';

export const DiagramTab = () => {
  const [selectYear, setSelectYear] = useState(currentYear.toString());
  const [selectMonth, setSelectMonth] = useState(currentMonth.toString());
  const categories = useSelector(getCategories);
  const chartCategories = () =>
    categories.filter(({ category }) => expenses.includes(category));

  const summaryExpenses = useSelector(getSumExpenses);
  const summaryIncome = useSelector(getSumIncome);

  const dispatch = useDispatch();

  const handleSelect = (value, action) => action(value.toString());

  useEffect(() => {
    dispatch(
      fetchTransactionsDetails({ year: selectYear, month: selectMonth }),
    );
  }, [dispatch, selectYear, selectMonth]);

  return (
    <Container>
      <div>
        <Title>Statistics</Title>
        <Chart
          categories={
            chartCategories().length !== 0
              ? chartCategories()
              : defaultCategories
          }
          summaryExpenses={summaryExpenses}
        />
      </div>
      <CategorySection>
        <SelectWrapper>
          <BtnWrapper>
            <Select
              options={months}
              defaultValue={getMonthConfig()}
              styles={selectStyles}
              onChange={({ value }) => handleSelect(value, setSelectMonth)}
            />
            <img src={arrow} width="18px" height="9px" alt="arrow" />
          </BtnWrapper>

          <BtnWrapper>
            <Select
              id="year"
              options={years}
              defaultValue={getYearConfig()}
              styles={selectStyles}
              onChange={({ value }) => handleSelect(value, setSelectYear)}
            />
            <img src={arrow} width="18px" height="9px" alt="arrow" />
          </BtnWrapper>
        </SelectWrapper>
        {categories && (
          <Table
            tableData={chartCategories()}
            summaryExpenses={summaryExpenses}
            summaryIncome={summaryIncome}
          />
        )}
      </CategorySection>
    </Container>
  );
};
