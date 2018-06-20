import Immutable from 'seamless-immutable';

import { RUSSIAN_ROUBLE } from '~/config/currency'; // eslint-disable-line import/no-unresolved, import/extensions
import { createReducer } from '~/utils';
import * as types from './action-types';


const initialState = Immutable.from({
  filter: {
    stops: {},
  },
  currency: RUSSIAN_ROUBLE,
});

const settings = createReducer(initialState, {
  [types.CHANGE_CURRENCY](state, { payload }) {
    return state.set('currency', payload.currency);
  },
  [types.SET_STOPS_FILTER](state, { payload }) {
    return state.setIn(['filter', 'stops'], payload.stops);
  },
  [types.CHANGE_STOPS_FILTER](state, { payload }) {
    return state.merge({
      filter: {
        stops: payload.stops,
      },
    }, {deep: true});
  },
});

export default settings;
