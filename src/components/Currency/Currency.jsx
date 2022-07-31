import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { CurrencyLayout } from './Currency.styled';
import { currencyInfo, baseCurrency } from './constants';

const TableContainer = styled.table`
  width: 100%;
  border-spacing: 0;
  color: var(--primary-text);
  line-height: 1.43;
`;

const TableHead = styled.thead`
  color: var(--primary-text);
  background: rgba(255, 255, 255, 0.2);
  font-size: 18px;
  text-transform: capitalize;
  text-align: center;
`;

const TableHeadText = styled.td`
  padding: 10px 0px;
  min-width: 70px;
  @media (min-width: 768px) {
    padding: 16px 0px;
  } ;
`;

const TableRow = styled.tr`
  font-size: 16px;
`;

const TableData = styled.td`
  text-align: center;
  padding-top: 12px;
  @media (min-width: 768px) {
    padding-top: 12px;
  }
  @media (min-width: 1280px) {
    padding-top: 24px;
  } ;
`;

export const Currency = () => {
  const [dataCurrency, setData] = useState();

  const fetch = () =>
    axios
      .get(
        `https://api.privatbank.ua/p24api/exchange_rates?json&date=31.07.2022`,
      )
      .then(({ data }) => {
        data &&
          setData(
            data.exchangeRate.filter(({ currency }) =>
              baseCurrency.includes(currency),
            ),
          );
        //return dispatch(actions.fetchContactSuccess(data));
      });

  useEffect(() => {
    fetch();
  }, []);

  return (
    <CurrencyLayout>
      <TableContainer>
        <TableHead>
          <tr>
            {currencyInfo.map((item, index) => (
              <TableHeadText key={item + index}>{item}</TableHeadText>
            ))}
          </tr>
        </TableHead>
        <tbody>
          {dataCurrency &&
            dataCurrency.map(
              ({ currency, saleRateNB, purchaseRateNB }, index) => (
                <TableRow key={saleRateNB + index}>
                  <TableData>{currency}</TableData>
                  <TableData>{saleRateNB.toFixed(2)}</TableData>
                  <TableData>{purchaseRateNB.toFixed(2)}</TableData>
                </TableRow>
              ),
            )}
        </tbody>
      </TableContainer>
    </CurrencyLayout>
  );
};
