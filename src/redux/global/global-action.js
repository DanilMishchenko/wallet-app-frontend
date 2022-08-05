import { createAction } from '@reduxjs/toolkit';

const openModalAddTransaction = createAction('global/openModalAddTransaction');

const closeModalAddTransaction = createAction(
  'global/closeModalAddTransaction',
);

const openModalLogout = createAction('global/openModalLogout');

const closeModalLogout = createAction('global/closeModalLogout');

export {
  openModalAddTransaction,
  closeModalAddTransaction,
  openModalLogout,
  closeModalLogout,
};
