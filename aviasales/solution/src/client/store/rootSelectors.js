import { createSelector } from 'reselect';

import * as fromTickets from './tickets/selectors';
import * as fromSettings from './settings/selectors';


const getAllTicketIds = state => fromTickets.getSortedIds(state.getIn(['tickets']));

const getAllTickets = state => fromTickets.getTickets(state.getIn(['tickets']));

const getFilters = state => fromSettings.getFilters(state.getIn(['settings']));

export const getCurrency = state => fromSettings.getCurrency(state.getIn(['settings']));

export const getIsFetching = state => fromTickets.getIsFetching(state.getIn(['tickets']));

export const getErrorMessage = state => fromTickets.getErrorMessage(state.getIn(['tickets']));

export const getAllStops = state => fromSettings.getAllStops(state.getIn(['settings']));

export const getTickets = createSelector(
  state => state.getIn(['tickets']),
  getAllTicketIds,
  getAllTickets,
  getFilters,
  (ticketsStore, allIds, tickets, filters) => {
    const ids = fromSettings.getFilteredIds(fromTickets, ticketsStore, allIds, filters);
    if (ids === null) {
      return [allIds, tickets];
    } else if (ids.length <= 0) {
      return [[], tickets];
    }
    return [ids, tickets];
  },
);
