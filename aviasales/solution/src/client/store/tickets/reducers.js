import Immutable from 'seamless-immutable';

import { createReducer } from '~/utils';
import * as types from './action-types';


const initialState = Immutable.from({
  data: {},
  ids: [],
  isFetching: false,
  errorMessage: null,
});

const tickets = createReducer(initialState, {
  [types.FETCH_TICKETS_REQUEST](state) {
    return state.merge({
      data: {},
      ids: [],
      isFetching: true,
      errorMessage: null,
    });
  },
  [types.FETCH_TICKETS_SUCCESS](state, { payload }) {
    return state.merge({
      data: payload.tickets,
      ids: payload.ids,
      isFetching: false,
    });
  },
  [types.FETCH_TICKETS_FAILURE](state, { payload }) {
    return state.merge({
      isFetching: false,
      errorMessage: payload.errorMessage,
    });
  },
});

export default tickets;
