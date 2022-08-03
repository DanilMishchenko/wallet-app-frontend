import React from 'react';
import { useSelector } from 'react-redux';

export const ChartBalance = () => {
  const transactions = useSelector(state => state.transactions.data);

  if (!transactions || transactions.length === 0) {
    return <p>{'\u20B4'} 0 </p>;
  } else {
    const balance = transactions[0].currentBalance;
    return (
      <p>
        {'\u20B4'} {balance}{' '}
      </p>
    );
  }
};
