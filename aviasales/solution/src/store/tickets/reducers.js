import Immutable from 'seamless-immutable';

import {
  FETCH_TICKETS_REQUEST,
  FETCH_TICKETS_SUCCESS,
  FETCH_TICKETS_FAILURE
} from './consts';


const initialState = Immutable.from({
  data: {},
  isFetching: false,
  errorMessage: null,
});

const tickets = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TICKETS_REQUEST: {
      return state.merge({
        isFetching: true,
        errorMessage: null
      });
      // console.log(newState.asMutable({ deep: true }));
    }
    case FETCH_TICKETS_SUCCESS: {
      const data = {};
      action.payload.tickets.forEach((ticket) => {
        data[ticket.id] = ticket
      });

      return state.merge({
        data,
        isFetching: false,
      }, { deep: true });
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

export const getIsFetching = (state) => state.getIn(['isFetching']);

export const getErrorMessage = (state) => state.getIn(['errorMessage']);

export const getTicket = (state, id) => {
  const tickets = state.getIn(['data']);
  return tickets[id];
};

export const getFilteredIds = (state, ...filters) => {
  const tickets = state.getIn(['data']);
  const allIds = Object.keys(tickets);

  if (filters.length === 0) {
    return allIds;
  }

  return allIds.map((id) => {
    if (filters.includes(tickets[id].stops)) {
      return id;
    }
  });
};
