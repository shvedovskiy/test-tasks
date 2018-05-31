import Immutable from 'seamless-immutable';

import * as currencies from '~/config/currencies'; // eslint-disable-line import/no-unresolved, import/extensions
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
