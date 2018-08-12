// @flow
import _ from 'lodash';

import ticketService from 'src/services/tickets';
import { getIsFetching } from 'src/store/rootSelectors';
import { setStopsFilter } from 'src/store/settings/actions';
import type { ThunkAction } from 'src/store/types';
import * as types from './action-types';
import type {
  State,
  Actions,
  TicketsType,
  TicketType,
} from './types';


const shouldFetchTickets = (state: State) => !getIsFetching(state);

export const requestTickets = () => ({
  type: types.FETCH_TICKETS_REQUEST,
});

export const ticketsFetchingSuccess = (tickets: TicketsType, ids: Array<string>) => ({
  type: types.FETCH_TICKETS_SUCCESS,
  tickets,
  ids,
});

export const ticketsFetchingFailure = (errorMessage: string) => ({
  type: types.FETCH_TICKETS_FAILURE,
  errorMessage,
});

const fetchTicketsIfNeeded = (): ThunkAction<State, Actions> => async (dispatch) => {
  dispatch(setStopsFilter());
  dispatch(requestTickets());

  try {
    const tickets: Array<TicketType> = await ticketService.getTickets();
    const ids: Array<string> = _.map(_.sortBy(tickets, t => Number.parseFloat(t.price)), 'id');
    const ticketsById: TicketsType = _.keyBy(tickets, 'id');
    const filter: Array<string> = _.uniq(_.map(ticketsById, 'stops'));

    dispatch(setStopsFilter(...filter));
    dispatch(ticketsFetchingSuccess(ticketsById, ids));
  } catch (error) {
    dispatch(ticketsFetchingFailure(error.message));
  }
};

export const fetchTicketsAction = (): ThunkAction<State, Actions> => (dispatch, getState) => {
  if (shouldFetchTickets(getState())) {
    return dispatch(fetchTicketsIfNeeded());
  }
  return Promise.resolve();
};

export const buyTicket = (id: string) => ({
  type: types.BUY_TICKET,
  id,
});
