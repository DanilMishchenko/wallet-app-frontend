import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTransactions } from '../../redux/transactions/transactions-selectors';
import { fetchTransactions } from '../../redux/transactions/transactions-operations';
import moment from 'moment';
import EllipsisText from 'react-ellipsis-text';
import Media from 'react-media';
import {
  Tab,
  Table,
  TableHeader,
  Column,
  Row,
  ColumnHeader,
  ColumnHeaderContent,
  NoTransactions,
  NoTransactionsMsg,
} from './HomeTab.styled';
import { HomeTabMobile } from './HomeTabMobile';

export const HomeTab = () => {
  const data = useSelector(getTransactions);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTransactions());
  }, [dispatch]);

  const formatAmount = amount => {
    return amount.toFixed(2);
  };

  return (
    <>
      {data.length > 0 ? (
        <>
          <Media
            queries={{
              mobile: '(min-width: 768px)',
            }}
          >
            {({ mobile }) => (
              <Tab>
                {!mobile ? (
                  <HomeTabMobile />
                ) : (
                  <Table>
                    <TableHeader>
                      <tr>
                        <ColumnHeader>
                          <ColumnHeaderContent>Date</ColumnHeaderContent>
                        </ColumnHeader>
                        <ColumnHeader>
                          <ColumnHeaderContent>Type</ColumnHeaderContent>
                        </ColumnHeader>
                        <ColumnHeader>
                          <ColumnHeaderContent>Category</ColumnHeaderContent>
                        </ColumnHeader>
                        <ColumnHeader>
                          <ColumnHeaderContent>Comment</ColumnHeaderContent>
                        </ColumnHeader>
                        <ColumnHeader>
                          <ColumnHeaderContent>Amount</ColumnHeaderContent>
                        </ColumnHeader>
                        <ColumnHeader>
                          <ColumnHeaderContent>Balance</ColumnHeaderContent>{' '}
                        </ColumnHeader>
                      </tr>
                    </TableHeader>
                    <tbody>
                      {data[0] &&
                        data.map(item => (
                          <Row key={item._id}>
                            <Column>
                              {moment.utc(item.date).format('MM.DD.YYYY')}
                            </Column>
                            <Column>{item.type === false ? '-' : '+'}</Column>
                            <Column>{item.category}</Column>
                            <Column>
                              <EllipsisText text={item.comment} length={15} />
                            </Column>
                            <Column type={String(item.type)}>
                              {formatAmount(item.sum)}
                            </Column>
                            <Column>{formatAmount(item.balance)}</Column>
                          </Row>
                        ))}
                    </tbody>
                  </Table>
                )}
              </Tab>
            )}
          </Media>
        </>
      ) : (
        <NoTransactions>
          <NoTransactionsMsg>No Transactions added</NoTransactionsMsg>
        </NoTransactions>
      )}
      {/* <ModalAddTransaction /> */}
    </>
  );
};
