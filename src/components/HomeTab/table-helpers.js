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
    accessor: 'amount',
    sticky: 'right',
  },
  {
    Header: 'Balance',
    accessor: 'balance',
  },
];

export const TRANSACTION_TYPES = {
  add: '+',
  minus: '-',
};

export const VALUES_TO_FORMAT = {
  balance: 'balance',
  amount: 'amount',
};
