import { createSelector } from 'reselect';

import * as fromTickets from './tickets/reducers';
import * as fromSettings from './settings/reducers';


export const getIsFetching = (state) =>
  fromTickets.getIsFetching(state.getIn(['tickets']));

export const getErrorMessage = (state) =>
  fromTickets.getErrorMessage(state.getIn(['tickets']));

const getTicketsIds = (state) =>
  fromTickets.getIds(state.getIn(['tickets']));

const getTickets = (state) =>
  fromTickets.getTickets(state.getIn(['tickets']));

export const getCurrentFilter = (state) =>
  fromSettings.getFilter(state.getIn(['settings']));

export const getCurrency = (state) =>
  fromSettings.getCurrency(state.getIn(['settings']));

export const getFilteredTickets = createSelector(
  (state) => state.getIn(['tickets']),
  getTickets,
  getCurrentFilter,
  (ticketsStore, tickets, filter) => {
    if (filter.length === 0) {
      return Object.values(tickets);
    }

    return Object.entries(tickets).map(([ id, ticket ]) => {
      const stops = fromTickets.getTicketStops(ticketsStore, id);
      if (filter.includes(stops)) {
        return ticket;
      }
    });
  },
);
