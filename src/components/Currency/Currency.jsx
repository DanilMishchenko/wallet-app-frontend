import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  CurrencyLayout,
  TableContainer,
  TableHead,
  TableHeadText,
  TableRow,
  TableData,
} from './Currency.styled';
import { currencyInfo, baseCurrency } from './constants';
import getDate from '../../utils/normalizeDate';


export const Currency = () => {
  const [dataCurrency, setData] = useState();

  const fetch = () =>
    axios
      .get(
        `https://api.privatbank.ua/p24api/exchange_rates?json&date=${getDate(new Date())}`,
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
