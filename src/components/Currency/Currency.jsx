import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getRates, getStatus } from '../../redux/currency/currency-selectors';
import currencyOperations from '../../redux/currency/currency-operations';
import { currencyInfo } from './constants';
import getDate from '../../utils/normalizeDate';
import { Loader } from '../Loader/Loader';

import {
  CurrencyLayout,
  TableContainer,
  TableHead,
  TableHeadText,
  TableRow,
  TableData,
  WrapperLoader,
} from './Currency.styled';

export const Currency = () => {
  const currencies = useSelector(getRates);
  const isLoading = useSelector(getStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(currencyOperations.fetch(getDate(new Date())));
  }, [dispatch]);

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
          {currencies &&
            !isLoading &&
            currencies.map(({ currency, saleRate, purchaseRate }, index) => (
              <TableRow key={saleRate + index}>
                <TableData>{currency}</TableData>
                <TableData>{saleRate.toFixed(2)}</TableData>
                <TableData>{purchaseRate.toFixed(2)}</TableData>
              </TableRow>
            ))}
        </tbody>
      </TableContainer>
      {isLoading && (
        <WrapperLoader>
          <Loader />
        </WrapperLoader>
      )}
    </CurrencyLayout>
  );
};
