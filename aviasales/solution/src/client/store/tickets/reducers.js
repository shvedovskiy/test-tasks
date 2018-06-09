import Immutable from 'seamless-immutable';

import {
  FETCH_TICKETS_REQUEST,
  FETCH_TICKETS_SUCCESS,
  FETCH_TICKETS_FAILURE,
} from './action-types';


const initialState = Immutable.from({
  data: {},
  ids: [],
  isFetching: false,
  errorMessage: null,
});

const tickets = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TICKETS_REQUEST: {
      return state.merge({
        data: {},
        ids: [],
        isFetching: true,
        errorMessage: null,
      });
    }
    case FETCH_TICKETS_SUCCESS: {
      return state.merge({
        data: action.payload.tickets,
        ids: action.payload.ids,
        isFetching: false,
      });
    }
    case FETCH_TICKETS_FAILURE: {
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
