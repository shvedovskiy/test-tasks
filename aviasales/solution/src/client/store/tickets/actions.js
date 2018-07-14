// @flow
import _ from 'lodash';

import ticketService from 'src/services/tickets';
import { getIsFetching } from 'src/store/rootSelectors';
import { setStopsFilter } from 'src/store/settings/actions';
import type { ThunkAction } from 'src/store/types';
import * as types from './action-types';
import type { State, Actions, TicketsType, ErrorType } from './types';


const shouldFetchTickets = state => !getIsFetching(state);

export const requestTickets = () => ({
  type: types.FETCH_TICKETS_REQUEST,
});

export const ticketsFetchingSuccess = (tickets: TicketsType, ids: Array<string>) => ({
  type: types.FETCH_TICKETS_SUCCESS,
  tickets,
  ids,
});

export const ticketsFetchingFailure = (errorMessage: ErrorType) => ({
  type: types.FETCH_TICKETS_FAILURE,
  errorMessage,
});

const fetchTicketsIfNeeded = () => async (dispatch) => {
  dispatch(setStopsFilter());
  dispatch(requestTickets());

  try {
    const tickets = await ticketService.getTickets();
    const ids = _.map(_.sortBy(tickets, t => Number.parseFloat(t.price)), 'id');
    const ticketsById = _.keyBy(tickets, 'id');
    const filter = _.uniq(_.map(ticketsById, 'stops'));

    dispatch(setStopsFilter(...filter));
    dispatch(ticketsFetchingSuccess(ticketsById, ids));
  } catch (errorMessage) {
    dispatch(ticketsFetchingFailure(errorMessage));
  }
};

export const fetchTicketsAction = (): ThunkAction<State, Actions> => (dispatch, getState) => {
  if (shouldFetchTickets(getState())) {
    return dispatch(fetchTicketsIfNeeded());
  }
  return Promise.resolve();
};

export const buyTicket = (id: string): void => {
  alert(`Buy ticket with ${id}`); // eslint-disable-line no-alert
};
