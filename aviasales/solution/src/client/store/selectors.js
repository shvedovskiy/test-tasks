import { createSelector } from 'reselect';

import * as fromTickets from './tickets/reducers';
import * as fromSettings from './settings/reducers';


const getAllTicketIds = state => fromTickets.getIds(state.getIn(['tickets']));

const getAllTickets = state => fromTickets.getTickets(state.getIn(['tickets']));

export const getIsFetching = state => fromTickets.getIsFetching(state.getIn(['tickets']));

export const getErrorMessage = state => fromTickets.getErrorMessage(state.getIn(['tickets']));

export const getCurrentFilter = state => fromSettings.getFilter(state.getIn(['settings']));

export const getCurrency = state => fromSettings.getCurrency(state.getIn(['settings']));

export const getTickets = createSelector(
  state => state.getIn(['tickets']),
  getAllTicketIds,
  getAllTickets,
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
