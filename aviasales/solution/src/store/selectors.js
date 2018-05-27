import { createSelector } from 'reselect';

import * as fromTickets from './tickets/reducers';
import * as fromSettings from './settings/reducers';


export const getIsFetching = (state) =>
  fromTickets.getIsFetching(state.getIn(['tickets']));

export const getErrorMessage = (state) =>
  fromTickets.getErrorMessage(state.getIn(['tickets']));

const getTicketsIds = (state) =>
  fromTickets.getIds(state.getIn(['tickets']));

export const getTickets = (state) =>
  fromTickets.getTickets(state.getIn(['tickets']));

export const getCurrentFilter = (state) =>
  fromSettings.getFilter(state.getIn(['settings']));

export const getCurrency = (state) =>
  fromSettings.getCurrency(state.getIn(['settings']));

const getFilteredIds = createSelector(
  getTicketsIds,
  getTickets,
  getCurrentFilter,
  (allIds, tickets, filter) => {
    if (filter.length === 0) {
      return allIds;
    }

    return allIds.map((id) => {
      if (filter.includes(tickets[id].stops)) {
        return id;
      }
    });
  },
);

export const getFilteredTickets = createSelector(
  (state) => state.getIn(['tickets']),
  getFilteredIds,
  (ticketsStore, ids) =>
    ids.map((id) => fromTickets.getTicket(ticketsStore, id))
);
