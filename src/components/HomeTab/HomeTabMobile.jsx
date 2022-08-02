import React, { useMemo } from 'react';
import { useSortBy, useTable } from 'react-table';
import { COLUMNS } from './table-helpers';
import {
  TabMobile,
  TableMobile,
  ColumnMobile,
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

  const getAmount = amount => {
    return amount.toFixed(2);
  };

  return (
    <>
      <TabMobile>
        {rows.map((row, i) => {
          return (
            <TableMobile key={i} {...getTableProps()} type={data[i].type}>
              <TableBodyMobile key={row.id} {...getTableBodyProps()}>
                <RowMobile>
                  <ColumnHeaderMobile>{COLUMNS[0].Header}</ColumnHeaderMobile>
                  <ColumnMobile>{data[i].date}</ColumnMobile>
                </RowMobile>
                <RowMobile>
                  <ColumnHeaderMobile>{COLUMNS[1].Header}</ColumnHeaderMobile>
                  <ColumnMobile>{data[i].type}</ColumnMobile>
                </RowMobile>
                <RowMobile>
                  <ColumnHeaderMobile>{COLUMNS[3].Header}</ColumnHeaderMobile>
                  <ColumnMobile>{data[i].comment}</ColumnMobile>
                </RowMobile>
                <RowMobile>
                  <ColumnHeaderMobile>{COLUMNS[2].Header}</ColumnHeaderMobile>
                  <ColumnMobile>{data[i].category}</ColumnMobile>
                </RowMobile>
                <RowMobile>
                  <ColumnHeaderMobile>{COLUMNS[4].Header}</ColumnHeaderMobile>
                  <ColumnMobile type={data[i].type}>
                    {getAmount(data[i].amount)}
                  </ColumnMobile>
                </RowMobile>
                <RowMobile>
                  <ColumnHeaderMobile>{COLUMNS[5].Header}</ColumnHeaderMobile>
                  <ColumnMobile>{getAmount(data[i].balance)}</ColumnMobile>
                </RowMobile>
              </TableBodyMobile>
            </TableMobile>
          );
        })}
      </TabMobile>
    </>
  );
};
