import { createSelector } from 'reselect';

import * as fromTickets from './tickets/reducers';
import * as fromSettings from './settings/reducers';


const getTicketsIds = state => fromTickets.getIds(state.getIn(['tickets']));

const getTickets = state => fromTickets.getTickets(state.getIn(['tickets']));

export const getIsFetching = state => fromTickets.getIsFetching(state.getIn(['tickets']));

export const getErrorMessage = state => fromTickets.getErrorMessage(state.getIn(['tickets']));

export const getCurrentFilter = state => fromSettings.getFilter(state.getIn(['settings']));

export const getCurrency = state => fromSettings.getCurrency(state.getIn(['settings']));

export const getTickets = createSelector(
  state => state.getIn(['tickets']),
  getTicketsIds,
  getTickets,
  getCurrentFilter,
  (ticketsStore, allIds, tickets, filter) => {
    if (filter.length === 0) {
      return [allIds, tickets];
    }

    const filteredIds = allIds.filter((id) => {
      const stops = fromTickets.getTicketStops(ticketsStore, id);
      return filter.includes(stops);
    });

    return [filteredIds, tickets];
  },
);
