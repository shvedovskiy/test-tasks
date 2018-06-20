import _ from 'lodash';

/* eslint-disable import/extensions, import/no-unresolved */
import ticketService from '~/services/tickets';
import { getIsFetching } from '~/store/rootSelectors';
import { setStopsFilter } from '~/store/settings/actions';
/* eslint-enable import/extensions, import/no-unresolved */
import * as types from './action-types';


export const fetchTickets = () =>
  async (dispatch, getState) => {
    if (getIsFetching(getState()) === false) {
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
          payload: { tickets: ticketsById, ids },
        });
      } catch (errorMessage) {
        dispatch({
          type: types.FETCH_TICKETS_FAILURE,
          payload: { errorMessage },
        });
      }
    }
  };

export const buyTicket = (id) => {
  alert(`Buy ticket with ${id}`); // eslint-disable-line no-alert
};
