import React, { useEffect, useMemo } from 'react';
import { useSortBy, useTable } from 'react-table';
import { COLUMNS } from './columns';
import {
  TabMobile,
  TableMobile,
  Column,
  ColumnHeader,
  RowMobile,
} from './HomeTab.styled';

const data = [
  {
    amount: 899,
    type: '-',
    category: 'Shoping',
    date: '2022-07-31',
    balance: 10211,
    comment: '6990',
    owner: '',
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
    comment: '000000000000000000000000000000000000000000',
    owner: '',
    createdAt: '2022-07-31T08:34:27.687Z',
    updatedAt: '2022-07-31T08:34:27.687Z',
    year: 2022,
    month: 7,
    id: '2',
  },
];

export const HomeTabMobile = () => {
  const columns = useMemo(() => COLUMNS, []);

  const { getTableProps, getTableBodyProps, rows } = useTable(
    { columns, data },
    useSortBy,
  );

  return (
    <>
      <TabMobile>
        {rows.map((row, i) => {
          return (
            <TableMobile key={i} {...getTableProps()} type={data[i].type}>
              <TabMobile key={row.id} {...getTableBodyProps()}>
                <RowMobile>
                  <ColumnHeader>{COLUMNS[0].Header}</ColumnHeader>
                  <Column>{data[i].date}</Column>
                </RowMobile>
                <RowMobile>
                  <ColumnHeader>{COLUMNS[1].Header}</ColumnHeader>
                  <Column>{data[i].type}</Column>
                </RowMobile>
                <RowMobile>
                  <ColumnHeader>{COLUMNS[3].Header}</ColumnHeader>
                  <Column>{data[i].comment}</Column>
                </RowMobile>
                <RowMobile>
                  <ColumnHeader>{COLUMNS[2].Header}</ColumnHeader>
                  <Column>{data[i].category}</Column>
                </RowMobile>
                <RowMobile>
                  <ColumnHeader>{COLUMNS[4].Header}</ColumnHeader>
                  <Column>{data[i].amount}</Column>
                </RowMobile>
                <RowMobile>
                  <ColumnHeader>{COLUMNS[5].Header}</ColumnHeader>
                  <Column>{data[i].balance}</Column>
                </RowMobile>
              </TabMobile>
            </TableMobile>
          );
        })}
        "Something"
      </TabMobile>
    </>
  );
};
