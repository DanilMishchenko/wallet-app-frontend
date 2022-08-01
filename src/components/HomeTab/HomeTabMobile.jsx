import React, { useMemo } from 'react';
import { useSortBy, useTable } from 'react-table';
import { COLUMNS } from './columns';
import {
  TabMobile,
  TableMobile,
  Column,
  ColumnHeaderMobile,
  RowMobile,
  TableBodyMobile,
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
    comment: '0000000000000000000',
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
              <TableBodyMobile key={row.id} {...getTableBodyProps()}>
                <RowMobile>
                  <ColumnHeaderMobile>{COLUMNS[0].Header}</ColumnHeaderMobile>
                  <Column>{data[i].date}</Column>
                </RowMobile>
                <RowMobile>
                  <ColumnHeaderMobile>{COLUMNS[1].Header}</ColumnHeaderMobile>
                  <Column>{data[i].type}</Column>
                </RowMobile>
                <RowMobile>
                  <ColumnHeaderMobile>{COLUMNS[3].Header}</ColumnHeaderMobile>
                  <Column>{data[i].comment}</Column>
                </RowMobile>
                <RowMobile>
                  <ColumnHeaderMobile>{COLUMNS[2].Header}</ColumnHeaderMobile>
                  <Column>{data[i].category}</Column>
                </RowMobile>
                <RowMobile>
                  <ColumnHeaderMobile>{COLUMNS[4].Header}</ColumnHeaderMobile>
                  <Column>{data[i].amount}</Column>
                </RowMobile>
                <RowMobile>
                  <ColumnHeaderMobile>{COLUMNS[5].Header}</ColumnHeaderMobile>
                  <Column>{data[i].balance}</Column>
                </RowMobile>
              </TableBodyMobile>
            </TableMobile>
          );
        })}
        "Something"
      </TabMobile>
    </>
  );
};
