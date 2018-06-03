import Immutable from 'seamless-immutable';
import { createSelector } from 'reselect';
import _ from 'lodash';

import * as currencies from '~/config/currencies'; // eslint-disable-line import/no-unresolved, import/extensions
import {
  CHANGE_CURRENCY,
  SET_STOPS_FILTER,
  CHANGE_STOPS_FILTER,
} from './action-types';


const initialState = Immutable.from({
  filter: {
    stops: {},
  },
  currency: currencies.RUSSIAN_ROUBLE,
});

const settings = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_CURRENCY: {
      return state.set('currency', action.payload.currency);
    }
    case SET_STOPS_FILTER: {
      return state.setIn(['filter', 'stops'], action.payload.stops);
    }
    case CHANGE_STOPS_FILTER: {
      return state.merge({
        filter: {
          stops: action.payload.stops,
        },
      }, { deep: true });
    }
    default: {
      return state.asMutable({ deep: true });
    }
  }
};

export default settings;

export const getAllStops = state =>
  state.getIn(['filter', 'stops']);

export const getStopsFilter = createSelector(
  getAllStops,
  (allStops) => {
    if (Object.values(allStops).every(stop => stop === true)) {
      return null;
    }
    return _.keys(_.pickBy(allStops), stop => stop === true)
      .map(k => Number.parseInt(k, 10));
  },
);


export const getCurrency = state =>
  state.getIn(['currency']);
