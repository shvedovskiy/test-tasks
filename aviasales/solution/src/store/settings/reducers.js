import Immutable from 'seamless-immutable';

import * as currencies from '~/config/currencies';
import {
  CHANGE_CURRENCY,
} from './consts';


const initialState = Immutable.from({
  filters: [],
  currency: currencies.RUSSIAN_ROUBLE
});

const settings = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_CURRENCY: {
      return state.set('currency', action.payload.currency);
    }
    default: {
      return state;
    }
  }
};

export default settings;

export const getCurrentFilters = (state) => state.getIn(['filters']);

export const getCurrency = (state) => state.getIn(['currency']);
