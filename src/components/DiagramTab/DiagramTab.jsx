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
  const currentStatus = useSelector(state => state.statistics.data);

  const currentMonth = new Date().getMonth() + 1;
  const currentYear = new Date().getFullYear();
  const [selectedMonth, setSelectedMonth] = useState(currentMonth);
  const [selectedYear, setSelectedYear] = useState(currentYear);
  const [value, setValue] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      getStatistics({
        month: String(selectedMonth),
        year: String(selectedYear),
      }),
    );
  }, [dispatch, selectedMonth, selectedYear]);

  // const handleChangeMonth = e => {
  //   setValue(e.target.value);
  // };
  // const options = months.map((month, index) => {
  //   return <options key={index}>{month}</options>;
  // });

  return (
    <>
      <Title>Statistics</Title>
      <Chart chartData={currentStatus} />
      <SelectWrapper>
        <BtnWrapper>
          <CustomSelect
            id="mounth"
            value={value}
            onChange={event => setValue(event.target.value)}
          >
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
      <Table tableData={currentStatus} />
    </>
  );
};
