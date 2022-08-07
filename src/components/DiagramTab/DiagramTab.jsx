import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  Title,
  Container,
  CategorySection,
  SelectWrapper,
  CustomSelect,
  BtnWrapper,
} from './DiagramTab.styled';
import { fetchTransactionsDetails } from '../../redux/transactions/transactions-operations';
import { getCategories } from '../../redux/transactions/transactions-selectors';
import { Chart } from '../Chart/Chart';
import { Table } from '../Table/Table';
import { months, years, currentYear } from './constants';
import arrow from '../../images/arrow.svg';

export const DiagramTab = () => {
  const [selectYear, setSelectYear] = useState(currentYear.toString());
  const [selectMonth, setSelectMonth] = useState('hide');
  const categories = useSelector(getCategories);
  const dispatch = useDispatch();

  const handleSelect = ({ target }, action) => action(target.value);

  const getTransactionsDetails = data =>
    dispatch(fetchTransactionsDetails(data));

  const requestData = () => {
    if (selectYear === 'hide') {
      return { year: currentYear.toString() };
    } else if (selectMonth === 'hide') {
      return { year: selectYear };
    } else {
      return { year: selectYear, month: selectMonth };
    }
  };

  useEffect(() => {
    getTransactionsDetails(requestData());
  }, [dispatch, selectYear, selectMonth]);

  return (
    <Container>
      <div>
        <Title>Statistics</Title>
        <Chart />
      </div>
      <CategorySection>
        <SelectWrapper>
          <BtnWrapper>
            <CustomSelect
              id="mounth"
              onChange={e => handleSelect(e, setSelectMonth)}
            >
              <option value={'hide'}>Month</option>
              {months.map(({ title, value }) => (
                <option key={title + value} value={value}>
                  {title}
                </option>
              ))}
            </CustomSelect>
            <img src={arrow} width="18px" height="9px" alt="arrow" />
          </BtnWrapper>

          <BtnWrapper>
            <CustomSelect
              id="year"
              onChange={e => handleSelect(e, setSelectYear)}
            >
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
      </CategorySection>
    </Container>
  );
};
