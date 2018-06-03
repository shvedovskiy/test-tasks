import Immutable from 'seamless-immutable';

import {
  FETCH_TICKETS_REQUEST,
  FETCH_TICKETS_SUCCESS,
  FETCH_TICKETS_FAILURE,
} from './action-types';


const initialState = Immutable.from({
  data: {},
  isFetching: false,
  errorMessage: null,
});

const tickets = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TICKETS_REQUEST: {
      return state.merge({
        data: {},
        isFetching: true,
        errorMessage: null,
      });
      // console.log(newState.asMutable({ deep: true }));
    }
    case FETCH_TICKETS_SUCCESS: {
      return state.merge({
        data: action.payload.tickets,
        isFetching: false,
      });
      // console.log(newState.asMutable({ deep: true }));
    }
    case FETCH_TICKETS_FAILURE: {
      return state.merge({
        isFetching: false,
        errorMessage: action.payload.errorMessage,
      });
      // console.log(newState.asMutable({ deep: true }));
    }
    default:
      return state.asMutable({ deep: true });
  }
};

export default tickets;

export const getIsFetching = state => state.getIn(['isFetching']);

export const getErrorMessage = state => state.getIn(['errorMessage']);

export const getIds = state => Object.keys(state.getIn(['data']));

export const getTickets = state => state.getIn(['data']);

export const getTicket = (state, id) => state.getIn(['data'])[id];

export const getTicketStops = (state, id) => state.getIn(['data'])[id].stops;