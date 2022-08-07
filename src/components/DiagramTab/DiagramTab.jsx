import { Chart } from '../Chart/Chart';
import { Table } from '../Table/Table';

import arrow from '../../images/arrow.svg';
import {
  Title,
  SelectWrapper,
  CustomSelect,
  BtnWrapper,
} from './DiagramTab.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getCategories } from '../../redux/transactions/transactions-selectors';
import { months, years, currentYear } from './constants';
import { useEffect } from 'react';
import {
  fetchTransactionsByCategory,
  fetchTransactionsDetails,
} from '../../redux/transactions/transactions-operations';

export const DiagramTab = () => {
  const categories = useSelector(getCategories);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTransactionsDetails({ year: currentYear.toString() }));
  }, [dispatch]);

  return (
    <>
      <Title>Statistics</Title>
      <Chart />
      <SelectWrapper>
        <BtnWrapper>
          <CustomSelect id="mounth">
            <option value="hide">Month</option>
            {months.map((month, index) => (
              <option key={month + index} value={month}>
                {month}
              </option>
            ))}
          </CustomSelect>
          <img src={arrow} width="18px" height="9px" alt="arrow" />
        </BtnWrapper>

        <BtnWrapper>
          <CustomSelect id="year">
            <option value="hide">Year</option>
            {years.map((year, index) => (
              <option key={year * index} value={year}>
                {year}
              </option>
            ))}
          </CustomSelect>
          <img src={arrow} width="18px" height="9px" alt="arrow" />
        </BtnWrapper>
      </SelectWrapper>
      {categories && <Table tableData={categories} />}
    </>
  );
};
