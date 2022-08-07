import { Chart } from '../Chart/Chart';
import { Table } from '../Table/Table';

import arrow from '../../images/arrow.svg';
import {
  Title,
  SelectWrapper,
  CustomSelect,
  BtnWrapper,
} from './DiagramTab.styled';

import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getStatistics } from '../../redux/statistics/statistics-operations';

export const DiagramTab = () => {
  const data = useSelector(state => state.transactions.items);

  // const lastElement = arrBalance.slice(-1);

  // const data = [
  //   {
  //     color: '#FED057',
  //     category: 'Basic expenses',
  //     sum: '8700.00',
  //   },
  //   {
  //     color: '#FFD8D0',
  //     category: 'Products',
  //     sum: '3800.74',
  //   },
  //   {
  //     color: '#FD9498',
  //     category: 'Car',
  //     sum: '1500.00',
  //   },
  //   {
  //     color: '#C5BAFF',
  //     category: 'Self care',
  //     sum: '800.0',
  //   },
  //   {
  //     color: '#6E78E8',
  //     category: 'Child care',
  //     sum: '2208.50',
  //   },
  //   {
  //     color: '#4A56E2',
  //     category: 'Household products',
  //     sum: '300',
  //   },
  //   {
  //     color: '#81E1FF',
  //     category: 'Education',
  //     sum: '3400.00',
  //   },
  //   {
  //     color: '#24CCA7',
  //     category: 'Leisure',
  //     sum: '1230.00',
  //   },
  //   {
  //     color: '#00AD84',
  //     category: 'Other expenses',
  //     sum: '610.00',
  //   },
  // ];

  const color = [
    {
      id: 1,
      color: '#FED057',
      category: 'Basic expenses',
      sum: '8700.00',
    },
    {
      color: '#FFD8D0',
      category: 'Products',
      sum: '3800.74',
    },
    {
      color: '#FD9498',
      category: 'Car',
      sum: '1500.00',
    },
    {
      color: '#C5BAFF',
      category: 'Self care',
      sum: '800.0',
    },
    {
      color: '#6E78E8',
      category: 'Child care',
      sum: '2208.50',
    },
    {
      color: '#4A56E2',
      category: 'Household products',
      sum: '300',
    },
    {
      color: '#81E1FF',
      category: 'Education',
      sum: '3400.00',
    },
    {
      color: '#24CCA7',
      category: 'Leisure',
      sum: '1230.00',
    },
    {
      color: '#00AD84',
      category: 'Other expenses',
      sum: '610.00',
    },
  ];

  const currentMonth = new Date().getMonth() + 1;
  const currentYear = new Date().getFullYear();
  const [selectedMonth, setSelectedMonth] = useState(currentMonth);
  const [selectedYear, setSelectedYear] = useState(currentYear);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      getStatistics({
        month: String(selectedMonth),
        year: String(selectedYear),
      }),
    );
  }, [dispatch, selectedMonth, selectedYear]);

  return (
    <>
      <Title>Statistics</Title>
      <Chart />
      <SelectWrapper>
        <BtnWrapper>
          <CustomSelect id="mounth">
            <option value="hide">Month</option>
            <option value="january">January</option>
            <option value="february">February</option>
            <option value="march">March</option>
            <option value="april">April</option>
            <option value="may">May</option>
            <option value="june">June</option>
            <option value="july">July</option>
            <option value="august">August</option>
            <option value="september">September</option>
            <option value="october">October</option>
            <option value="november">November</option>
            <option value="december">December</option>
          </CustomSelect>
          <img src={arrow} width="18px" height="9px" alt="arrow" />
        </BtnWrapper>

        <BtnWrapper>
          <CustomSelect id="year">
            <option value="hide">Year</option>
            <option value="2022">2022</option>
            <option value="2021">2021</option>
            <option value="2020">2020</option>
          </CustomSelect>
          <img src={arrow} width="18px" height="9px" alt="arrow" />
        </BtnWrapper>
      </SelectWrapper>
      <Table tableData={data} color={color} />
    </>
  );
};
