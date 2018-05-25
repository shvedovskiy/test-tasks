import {
  FETCH_TICKETS_REQUEST,
  FETCH_TICKETS_SUCCESS,
  FETCH_TICKETS_FAILURE
} from './consts';


const initialState = {
  data: {},
  isFetching: false,
  errorMessage: null,
};

const tickets = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TICKETS_REQUEST: {
      return {
        data: {},
        isFetching: true,
        errorMessage: null,
      };
    }
    case FETCH_TICKETS_SUCCESS: {
      const data = {};
      action.payload.tickets.forEach(ticket => data[ticket.id] = ticket);

      return {
        data,
        isFetching: false,
        errorMessage: null,
      }
    }
    case FETCH_TICKETS_FAILURE: {
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload.errorMessage,
      };
    }
    default:
      return state;
  }
};

export default tickets;

export const getIsFetching = (state) => state.isFetching;

export const getErrorMessage = (state) => state.errorMessage;

export const getTicket = (state, id) => state.data[id];

export const getFilteredIds = (state, ...filters) => {
  if (filters.length === 0) {
    return Object.keys(state.data);
  }

  return Object.keys(state.data).map(id => {
    if (filters.includes(state.data[id].stops)) {
      return id;
    }
  });
};
