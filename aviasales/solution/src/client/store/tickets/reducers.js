// @flow
import Immutable from 'seamless-immutable';

import { createReducer } from 'src/utils';
import * as types from './action-types';
import type { State, StateShape } from './types';


const initialState: State = Immutable.from(({
  data: {},
  ids: [],
  isFetching: false,
  errorMessage: {},
}: StateShape));

const ticketsReducer = createReducer(initialState, {
  [types.FETCH_TICKETS_REQUEST](state) {
    return state.merge({
      data: {},
      ids: [],
      isFetching: true,
      errorMessage: {},
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
