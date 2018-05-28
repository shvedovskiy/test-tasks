import {
  CHANGE_CURRENCY,
  CHANGE_FILTER,
} from './consts';


export const changeCurrency = (currency) => ({
  type: CHANGE_CURRENCY,
  payload: { currency },
});

export const changeFilter = (...filters) => ({
  type: CHANGE_FILTER,
  payload: { filters },
});
