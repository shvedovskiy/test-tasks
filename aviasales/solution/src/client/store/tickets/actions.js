/* eslint-disable import/no-unresolved import/extensions */
import ticketService from '~/services/tickets';

import {
  FETCH_TICKETS_REQUEST,
  FETCH_TICKETS_SUCCESS,
  FETCH_TICKETS_FAILURE,
} from './action-types';
/* eslint-enable import/no-unresolved import/extensions */

const fetchTicketsRequest = () => ({
  type: FETCH_TICKETS_REQUEST,
});

const fetchTicketsSuccess = tickets => ({
  type: FETCH_TICKETS_SUCCESS,
  payload: { tickets },
});

const fetchTicketsFailure = errorMessage => ({
  type: FETCH_TICKETS_FAILURE,
  payload: { errorMessage },
});

export const fetchTickets = () =>
  async (dispatch, getState) => {
    dispatch(fetchTicketsRequest());

    try {
      const tickets = await ticketService.getTickets();
      const ticketsById = {};

      tickets.forEach((ticket) => {
        ticketsById[ticket.id] = ticket;
      });

      dispatch(fetchTicketsSuccess(ticketsById));
    } catch (error) {
      dispatch(fetchTicketsFailure(error));
    }
  };

export const buyTicket = id => {
  // noop
};
