import _ from 'lodash';

import ticketService from '~/services/tickets'; // eslint-disable-line import/extensions, import/no-unresolved
import { getIsFetching } from '../selectors';
import { setStopsFilter } from '../settings/actions';

import {
  FETCH_TICKETS_REQUEST,
  FETCH_TICKETS_SUCCESS,
  FETCH_TICKETS_FAILURE,
} from './action-types';


const fetchTicketsRequest = () => ({
  type: FETCH_TICKETS_REQUEST,
});

const fetchTicketsSuccess = (tickets, ids) => ({
  type: FETCH_TICKETS_SUCCESS,
  payload: { tickets, ids },
});

const fetchTicketsFailure = errorMessage => ({
  type: FETCH_TICKETS_FAILURE,
  payload: { errorMessage },
});

export const fetchTickets = () =>
  async (dispatch, getState) => {
    if (getIsFetching(getState()) === false) {
      dispatch(setStopsFilter());
      dispatch(fetchTicketsRequest());

      try {
        const tickets = await ticketService.getTickets();
        const ids = _.map(_.sortBy(tickets, t => Number.parseFloat(t.price)), 'id');
        const ticketsById = _.keyBy(tickets, 'id');
        const filter = _.uniq(_.map(ticketsById, 'stops'));

        dispatch(setStopsFilter(...filter));
        dispatch(fetchTicketsSuccess(ticketsById, ids));
      } catch (error) {
        dispatch(fetchTicketsFailure(error));
      }
    }
  };

export const buyTicket = (id) => {
  alert(`Buy ticket with ${id}`); // eslint-disable-line no-alert
};
