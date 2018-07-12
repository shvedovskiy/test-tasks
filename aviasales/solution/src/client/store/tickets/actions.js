// @flow
import _ from 'lodash';

import ticketService from 'src/services/tickets';
import { getIsFetching } from 'src/store/rootSelectors';
import { setStopsFilter } from 'src/store/settings/actions';
import * as types from './action-types';


const shouldFetchTickets = state => !getIsFetching(state);

const fetchTicketsIfNeeded = () => async (dispatch) => {
  dispatch(setStopsFilter());
  dispatch({
    type: types.FETCH_TICKETS_REQUEST,
  });

  try {
    const tickets = await ticketService.getTickets();
    const ids = _.map(_.sortBy(tickets, t => Number.parseFloat(t.price)), 'id');
    const ticketsById = _.keyBy(tickets, 'id');
    const filter = _.uniq(_.map(ticketsById, 'stops'));

    dispatch(setStopsFilter(...filter));
    dispatch({
      type: types.FETCH_TICKETS_SUCCESS,
      tickets: ticketsById,
      ids,
    });
  } catch (errorMessage) {
    dispatch({
      type: types.FETCH_TICKETS_FAILURE,
      errorMessage,
    });
  }
};

export const fetchTicketsAction = () => (dispatch, getState) => {
  if (shouldFetchTickets(getState())) {
    return dispatch(fetchTicketsIfNeeded());
  }
  return Promise.resolve();
};

export const buyTicket = (id) => {
  alert(`Buy ticket with ${id}`); // eslint-disable-line no-alert
};
