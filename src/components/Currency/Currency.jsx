import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getRates, getStatus } from '../../redux/currency/currency-selectors';
import currencyOperations from '../../redux/currency/currency-operations';

import { Loader } from '../Loader/Loader';
import CurrencyTab from './CurrencyTab';
import { CurrencyLayout, WrapperLoader } from './Currency.styled';

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
