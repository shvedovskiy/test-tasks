// @flow
import Immutable from 'seamless-immutable';

import { RUSSIAN_ROUBLE } from 'src/config/currency';
import { createReducer } from 'src/utils';
import * as types from './action-types';
import type { State, StateShape } from './types';


const initialState: State = Immutable.from(({
  filter: {
    stops: {},
  },
  currency: RUSSIAN_ROUBLE,
}: StateShape));

const settingsReducer = createReducer(initialState, {
  [types.CHANGE_CURRENCY](state: State, { currency }) {
    return state.set('currency', currency);
  },
  [types.SET_STOPS_FILTER](state: State, { stops }) {
    return state.setIn(['filter', 'stops'], stops);
  },
  [types.CHANGE_STOPS_FILTER](state: State, { stops }) {
    return state.merge({
      filter: { stops },
    }, { deep: true });
  },
});

export default settingsReducer;
