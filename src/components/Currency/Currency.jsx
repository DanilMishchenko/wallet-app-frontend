import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CurrencyLayout, WrapperLoader } from './Currency.styled';
import {
  getRates,
  getStatus,
  isOpen,
} from '../../redux/currency/currency-selectors';
import { Loader } from '../Loader/Loader';
import currencyOperations from '../../redux/currency/currency-operations';
import useMediaQuery from '../../hooks/useMediaQuery';
import CurrencyTab from './CurrencyTab';

export const Currency = () => {
  const dispatch = useDispatch();
  const currencies = useSelector(getRates);
  const isLoading = useSelector(getStatus);
  const isCurrencyOpen = useSelector(isOpen);
  const isMobile = useMediaQuery('(max-width: 768px)');

  const isCurrencyShow = isMobile ? isCurrencyOpen : true;

  useEffect(() => {
    dispatch(currencyOperations.getCurrency());
  }, [dispatch]);

  return (
    <>
      {isCurrencyShow && (
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
      )}
    </>
  );
};
