import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AiOutlineUp, AiOutlineDown } from 'react-icons/ai';
import { useSortBy, useTable } from 'react-table';
import { COLUMNS, VALUES_TO_FORMAT } from './table-helpers';
import { getTransactions } from '../../redux/transactions/transactions-selectors';
import { fetchTransactions } from '../../redux/transactions/transactions-operations';
import moment from 'moment';
import {
  incrementByAmount,
  decrementByAmount,
} from '../../redux/balance/balance-reducer';
import { nanoid } from 'nanoid';
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

const data = [
  {
    amount: 899,
    type: '-',
    category: 'Shoping',
    date: '2022-07-31',
    balance: 10211,
    comment: '00000000000000000000000000',
    owner: '62e63a1794f183c86c330d5a',
    createdAt: '2022-07-31T08:34:27.687Z',
    updatedAt: '2022-07-31T08:34:27.687Z',
    year: 2022,
    month: 7,
    id: '1',
  },
  {
    amount: 233,
    type: '+',
    category: 'Car',
    date: '2022-07-31',
    balance: 10211,
    comment: '6990',
    owner: '62e63a1794f183c86c330d5a',
    createdAt: '2022-07-31T08:34:27.687Z',
    updatedAt: '2022-07-31T08:34:27.687Z',
    year: 2022,
    month: 7,
    id: '2',
  },
];

export const HomeTab = () => {
  const columns = useMemo(() => COLUMNS, []);
  const balance = useSelector(state => state.balance);
  const [balanceShow, setBalanceShow] = useState(balance.value);
  const items = useSelector(state => state.transactions.items);
  const data = useSelector(getTransactions);
  const dispatch = useDispatch();
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable(
      {
        columns,
        data,
      },
      useSortBy,
    );

  useEffect(() => {
    dispatch(fetchTransactions());
  }, []);

  // useEffect(() => {
  //   if (items[items.length - 1]) {
  //     if (items[items.length - 1].type === false) {
  //       dispatch(decrementByAmount(items[items.length - 1].sum));
  //       setBalanceShow(balance.value);
  //       return;
  //     } else {
  //       dispatch(incrementByAmount(items[items.length - 1].sum));
  //       setBalanceShow(balance.value);
  //       return;
  //     }
  //   }
  //   return;
  // }, [items]);

  const formatAmount = amount => {
    return amount;
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
                  <Table {...getTableProps()}>
                    <TableHeader>
                      {headerGroups.map(headerGroup => (
                        <tr
                          key={() => {
                            nanoid();
                          }}
                          {...headerGroup.getHeaderGroupProps()}
                        >
                          {headerGroup.headers.map(column => (
                            <ColumnHeader
                              key={() => {
                                nanoid();
                              }}
                              {...column.getHeaderProps(
                                column.getSortByToggleProps(),
                              )}
                            >
                              <ColumnHeaderContent>
                                {column.render('Header')}
                                <span>
                                  {column.isSorted ? (
                                    column.isSortedDesc ? (
                                      <AiOutlineDown />
                                    ) : (
                                      <AiOutlineUp />
                                    )
                                  ) : (
                                    ''
                                  )}
                                </span>
                              </ColumnHeaderContent>
                            </ColumnHeader>
                          ))}
                        </tr>
                      ))}
                    </TableHeader>

                    <tbody {...getTableBodyProps()}>
                      {rows.map(row => {
                        prepareRow(row);
                        return (
                          <Row
                            key={() => {
                              nanoid();
                            }}
                            {...row.getRowProps()}
                          >
                            {row.cells.map(cell => {
                              if (
                                cell.column.id === 'date' &&
                                typeof cell.value !== 'boolean'
                              ) {
                                return (
                                  <Column
                                    type={String(row.values.type)}
                                    key={() => {
                                      nanoid();
                                    }}
                                    {...cell.getCellProps()}
                                  >
                                    {moment
                                      .utc(cell.value)
                                      .format('MM.DD.YYYY')}
                                  </Column>
                                );
                              }
                              if (
                                cell.column.id === VALUES_TO_FORMAT.sum &&
                                typeof cell.value !== 'boolean'
                              ) {
                                return (
                                  <Column
                                    type={String(row.values.type)}
                                    key={() => {
                                      nanoid();
                                    }}
                                    {...cell.getCellProps()}
                                  >
                                    {formatAmount(cell.value)}
                                  </Column>
                                );
                              }
                              if (typeof cell.value === 'boolean') {
                                return (
                                  <Column
                                    type={String(row.values.type)}
                                    key={() => {
                                      nanoid();
                                    }}
                                    {...cell.getCellProps()}
                                  >
                                    {cell.value === false ? '-' : '+'}
                                  </Column>
                                );
                              }
                              if (
                                cell.value &&
                                typeof cell.value !== 'boolean'
                              ) {
                                return (
                                  <Column
                                    type={String(row.values.type)}
                                    key={() => {
                                      nanoid();
                                    }}
                                    {...cell.getCellProps()}
                                  >
                                    <EllipsisText
                                      text={String(cell.value)}
                                      length={12}
                                    />
                                  </Column>
                                );
                              }
                              if (!cell.value && cell.column.id !== 'balance') {
                                return (
                                  <Column
                                    type={String(row.values.type)}
                                    key={() => {
                                      nanoid();
                                    }}
                                    {...cell.getCellProps()}
                                  >
                                    {' '}
                                  </Column>
                                );
                              }
                              if (cell.column.id === 'balance' && !cell.value) {
                                return (
                                  <Column
                                    type={String(row.values.type)}
                                    key={() => {
                                      nanoid();
                                    }}
                                    {...cell.getCellProps()}
                                  >
                                    {/* {items[items.length - 1].type === false
                                      ? balance.value -
                                        items[items.length - 1].sum
                                      : balance.value +
                                        items[items.length - 1].sum} */}
                                    {formatAmount(balanceShow)}
                                  </Column>
                                );
                              }
                            })}
                          </Row>
                        );
                      })}
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
