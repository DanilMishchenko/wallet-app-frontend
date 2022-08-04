export const COLUMNS = [
  {
    Header: 'Date',
    accessor: 'date',
    disableFilters: true,
    sticky: 'centre',
  },
  {
    Header: 'Type',
    accessor: 'type',
    sticky: 'centre',
  },
  {
    Header: 'Category',
    accessor: 'category',
    sticky: 'centre',
  },
  {
    Header: 'Comment',
    accessor: 'comment',
  },
  {
    Header: 'Sum',
    accessor: 'sum',
    sticky: 'right',
  },
  {
    Header: 'Balance',
    accessor: 'balance',
    sticky: 'right',
  },
];

export const TRANSACTION_TYPES = {
  add: 'true',
  minus: 'false',
};

export const VALUES_TO_FORMAT = {
  balance: 'balance',
  sum: 'sum',
};
