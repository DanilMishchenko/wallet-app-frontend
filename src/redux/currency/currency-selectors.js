export const getRates = state => state.currency.exchangeRate;
export const getStatus = state => state.currency.session.isLoading;
export const isOpen = state => state.currency.isOpen;
