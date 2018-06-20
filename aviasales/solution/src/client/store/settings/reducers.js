import Immutable from 'seamless-immutable';

/* eslint-disable import/no-unresolved, import/extensions */
import { RUSSIAN_ROUBLE } from '~/config/currency';
import { createReducer } from '~/utils';
/* eslint-enable import/no-unresolved, import/extensions */
import * as types from './action-types';


const initialState = Immutable.from({
  filter: {
    stops: {},
  },
  currency: RUSSIAN_ROUBLE,
});

const settings = createReducer(initialState, {
  [types.CHANGE_CURRENCY](state, { currency }) {
    return state.set('currency', currency);
  },
  [types.SET_STOPS_FILTER](state, { stops }) {
    return state.setIn(['filter', 'stops'], stops);
  },
  [types.CHANGE_STOPS_FILTER](state, { stops }) {
    return state.merge({
      filter: { stops },
    }, { deep: true });
  },
});

export default settings;
