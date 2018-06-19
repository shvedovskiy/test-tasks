import Immutable from 'seamless-immutable';

import * as types from './action-types';


const initialState = Immutable.from({
  data: {},
  ids: [],
  isFetching: false,
  errorMessage: null,
});

const tickets = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_TICKETS_REQUEST: {
      return state.merge({
        data: {},
        ids: [],
        isFetching: true,
        errorMessage: null,
      });
    }
    case types.FETCH_TICKETS_SUCCESS: {
      return state.merge({
        data: action.payload.tickets,
        ids: action.payload.ids,
        isFetching: false,
      });
    }
    case types.FETCH_TICKETS_FAILURE: {
      return state.merge({
        isFetching: false,
        errorMessage: action.payload.errorMessage,
      });
    }
    default:
      return state.asMutable({ deep: true });
  }
};

export default tickets;
