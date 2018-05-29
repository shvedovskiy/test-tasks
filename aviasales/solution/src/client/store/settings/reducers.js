import Immutable from 'seamless-immutable';

/* eslint import/no-unresolved:0 import/extensions:0 */
import * as currencies from '~/config/currencies';
import {
  CHANGE_CURRENCY,
  CHANGE_FILTER,
} from './action-types';


const initialState = Immutable.from({
  filters: [],
  currency: currencies.RUSSIAN_ROUBLE,
});

const settings = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_CURRENCY: {
      return state.set('currency', action.payload.currency);
    }
    case CHANGE_FILTER: {
      return state.set('filters', action.payload.filters);
    }
    default: {
      return state;
    }
  }
};

export default settings;

export const getFilter = state => state.getIn(['filters']);

export const getCurrency = state => state.getIn(['currency']);
