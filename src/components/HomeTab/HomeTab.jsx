import React, { useEffect, useMemo } from 'react';
import { AiOutlineUp, AiOutlineDown } from 'react-icons/ai';
import { useSortBy, useTable } from 'react-table';
import { COLUMNS } from './columns';
import { nanoid } from 'nanoid';
import Media from 'react-media';
import {
  Tab,
  Table,
  TableHeader,
  Column,
  Row,
  ColumnHeader,
} from './HomeTab.styled';
import { HomeTabMobile } from './HomeTabMobile';

const data = [
  {
    amount: 899,
    type: '-',
    category: 'Shoping',
    date: '2022-07-31',
    balance: 10211,
    comment: '0000000000000000000000000000000000000000000000',
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
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable(
      {
        columns,
        data,
      },
      useSortBy,
    );

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
                              return (
                                <Column
                                  type={row.values.type}
                                  key={() => {
                                    nanoid();
                                  }}
                                  {...cell.getCellProps()}
                                >
                                  {cell.render('Cell')}
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
        'EEE'
      )}
    </>
  );
};
