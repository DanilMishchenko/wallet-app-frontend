import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getStatistics } from '../../redux/statistics/statistics-operations';
import { Chart } from '../Chart/Chart';
import { Table } from '../Table/Table';
import arrow from '../../images/arrow.svg';
import {
  Title,
  SelectWrapper,
  CustomSelect,
  BtnWrapper,
} from './DiagramTab.styled';

export const DiagramTab = () => {
  const data = useSelector(state => state.transactions.items);
  console.log(data);

  // const lastElement = arrBalance.slice(-1);
  //todo
  //посчитать транзакции
  // прописать проп тайпі
  // отрисовка баланса

  // const colors = [
  //   {
  //     id: 1,
  //     color: '#FED057',
  //   },
  //   {
  //     id: 2,
  //     color: '#FFD8D0',
  //   },
  //   {
  //     id: 3,
  //     color: '#FD9498',
  //   },
  //   {
  //     id: 4,
  //     color: '#C5BAFF',
  //   },
  //   {
  //     id: 5,
  //     color: '#6E78E8',
  //   },
  //   {
  //     id: 6,
  //     color: '#4A56E2',
  //   },
  //   {
  //     id: 7,
  //     color: '#81E1FF',
  //   },
  //   {
  //     id: 8,
  //     color: '#24CCA7',
  //   },
  //   {
  //     id: 9,
  //     color: '#00AD84',
  //   },
  // ];
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

  const months = [
    { name: 'January', id: 1 },
    { name: 'February', id: 2 },
    { name: 'March', id: 3 },
    { name: 'April', id: 4 },
    { name: 'May', id: 5 },
    { name: 'June', id: 6 },
    { name: 'July', id: 7 },
    { name: 'August', id: 8 },
    { name: 'September', id: 9 },
    { name: 'October', id: 10 },
    { name: 'November', id: 11 },
    { name: 'December', id: 12 },
  ];
  const years = [
    { name: '2022', id: 1 },
    { name: '2021', id: 2 },
    { name: '2020', id: 3 },
    { name: '2019', id: 4 },
    { name: '2018', id: 5 },
    { name: '2017', id: 6 },
    { name: '2016', id: 7 },
    { name: '2015', id: 8 },
    { name: '2014', id: 9 },
    { name: '2013', id: 10 },
    { name: '2012', id: 11 },
    { name: '2011', id: 12 },
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
      <Table tableData={data} />
    </>
  );
};
