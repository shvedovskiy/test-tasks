// @flow
import Immutable from 'seamless-immutable';

import { createReducer } from 'src/utils';
import * as types from './action-types';


const initialState = Immutable.from({
  data: {},
  ids: [],
  isFetching: false,
  errorMessage: null,
});

const ticketsReducer = createReducer(initialState, {
  [types.FETCH_TICKETS_REQUEST](state) {
    return state.merge({
      data: {},
      ids: [],
      isFetching: true,
      errorMessage: null,
    });
  },
  [types.FETCH_TICKETS_SUCCESS](state, { tickets, ids }) {
    return state.merge({
      data: tickets,
      ids,
      isFetching: false,
    });
  },
  [types.FETCH_TICKETS_FAILURE](state, { errorMessage }) {
    return state.merge({
      isFetching: false,
      errorMessage,
    });
  },
});

export default ticketsReducer;
