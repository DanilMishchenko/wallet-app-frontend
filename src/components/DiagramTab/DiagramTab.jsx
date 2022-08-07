import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  Title,
  SelectWrapper,
  CustomSelect,
  BtnWrapper,
} from './DiagramTab.styled';
import { fetchTransactionsDetails } from '../../redux/transactions/transactions-operations';
import { getCategories } from '../../redux/transactions/transactions-selectors';
import { Chart } from '../Chart/Chart';
import { Table } from '../Table/Table';
import { months, years, currentYear, currentMonth } from './constants';
import arrow from '../../images/arrow.svg';

export const DiagramTab = () => {
  const [selectYear, setSelectYear] = useState(currentYear.toString());
  const [selectMonth, setSelectMonth] = useState(currentMonth.toString());
  const categories = useSelector(getCategories);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      fetchTransactionsDetails({ year: selectYear, month: selectMonth }),
    );
  }, [dispatch, selectYear, selectMonth]);

  return (
    <>
      <Title>Statistics</Title>
      <Chart />
      <SelectWrapper>
        <BtnWrapper>
          <CustomSelect
            id="mounth"
            onChange={e => setSelectMonth(e.target.value)}
          >
            <option value="hide">Month</option>
            {months.map(({ title, value }) => (
              <option key={title + value} value={value}>
                {title}
              </option>
            ))}
          </CustomSelect>
          <img src={arrow} width="18px" height="9px" alt="arrow" />
        </BtnWrapper>

        <BtnWrapper>
          <CustomSelect id="year" onChange={e => setSelectYear(e.target.value)}>
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
