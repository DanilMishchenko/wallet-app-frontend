import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AiOutlineUp, AiOutlineDown } from 'react-icons/ai';
import { useSortBy, useTable } from 'react-table';
import { COLUMNS, VALUES_TO_FORMAT } from './table-helpers';
import { getTransactions } from '../../redux/transactions/transactions-selectors';
import { fetchTransactions } from '../../redux/transactions/transactions-operations';
// import { useFetchTransactionsQuery } from '../../redux/transactions/transactions-reducers';

// import { ModalAddTransaction } from '../ModalAddTransaction/ModalAddTransaction';
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
  // const featchData = useSelector(getTransactions);
  const token = useSelector(state => state.auth.token);
  const state = useSelector(state => state);
  // const { data = [], isLoading } = useFetchTransactionsQuery(token);
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
    console.log(state);
    dispatch(fetchTransactions());
  }, [dispatch]);
  // useEffect(() => {
  //   console.log(data);
  // }, []);

  const getAmount = amount => {
    console.log(data);
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
                                Object.values(VALUES_TO_FORMAT).includes(
                                  cell.column.id,
                                )
                              ) {
                                return (
                                  <Column
                                    type={row.values.type}
                                    key={() => {
                                      nanoid();
                                    }}
                                    {...cell.getCellProps()}
                                  >
                                    {getAmount(cell.value)}
                                  </Column>
                                );
                              }
                              return (
                                <Column
                                  type={row.values.type}
                                  key={() => {
                                    nanoid();
                                  }}
                                  {...cell.getCellProps()}
                                >
                                  <EllipsisText text={cell.value} length={12} />
                                </Column>
                              );
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
