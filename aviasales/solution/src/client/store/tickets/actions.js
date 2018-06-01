import ticketService from '~/services/tickets'; // eslint-disable-line import/extensions, import/no-unresolved
import { getIsFetching } from '../selectors';

import {
  FETCH_TICKETS_REQUEST,
  FETCH_TICKETS_SUCCESS,
  FETCH_TICKETS_FAILURE,
} from './action-types';


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
    if (getIsFetching(getState()) === false) {
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
    }
  };

export const buyTicket = (id) => {
  alert(`Buy ticket with ${id}`); // eslint-disable-line no-alert
};
