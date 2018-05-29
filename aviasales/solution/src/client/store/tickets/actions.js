/* eslint-disable import/no-unresolved import/extensions */
import ticketService from '~/services/tickets';

import {
  FETCH_TICKETS_REQUEST,
  FETCH_TICKETS_SUCCESS,
  FETCH_TICKETS_FAILURE,
} from './action-types';
/* eslint-enable import/no-unresolved import/extensions */


export const fetchTickets = () =>
  async (dispatch, getState) => {
    dispatch({
      type: FETCH_TICKETS_REQUEST,
    });

    try {
      const tickets = await ticketService.getTickets();
      const ticketsById = {};

      tickets.forEach((ticket) => {
        ticketsById[ticket.id] = ticket;
      });

      dispatch({
        type: FETCH_TICKETS_SUCCESS,
        payload: {
          tickets: ticketsById,
        },
      });
    } catch (errorMessage) {
      dispatch({
        type: FETCH_TICKETS_FAILURE,
        payload: { errorMessage },
      });
    }
  };

export const buyTicket = id => {
  // noop
};
