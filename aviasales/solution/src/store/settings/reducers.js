import * as currencies from '~/config/currencies';


const initialState = {
  filters: [],
  currency: currencies.RUSSIAN_ROUBLE
};

const settings = (state = initialState, action) => {
  return state;
};

export default settings;

export const getCurrentFilters = (state) => state.filters;
