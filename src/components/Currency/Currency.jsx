import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CurrencyLayout, WrapperLoader } from './Currency.styled';
import { getRates, getStatus } from '../../redux/currency/currency-selectors';
import { Loader } from '../Loader/Loader';
import currencyOperations from '../../redux/currency/currency-operations';
import CurrencyTab from './CurrencyTab';

export const Currency = () => {
  const dispatch = useDispatch();
  const currencies = useSelector(getRates);
  const isLoading = useSelector(getStatus);

  useEffect(() => {
    dispatch(currencyOperations.getCurrency());
  }, [dispatch]);

  return (
    <CurrencyLayout>
      {currencies && (
        <CurrencyTab currencies={currencies} isLoading={isLoading} />
      )}
      {isLoading && (
        <WrapperLoader>
          <Loader />
        </WrapperLoader>
      )}
    </CurrencyLayout>
  );
};
