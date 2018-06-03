import { createSelector } from 'reselect';

import * as fromTickets from './tickets/reducers';
import * as fromSettings from './settings/reducers';


const getAllTicketIds = state => fromTickets.getIds(state.getIn(['tickets']));

const getAllTickets = state => fromTickets.getTickets(state.getIn(['tickets']));

export const getIsFetching = state => fromTickets.getIsFetching(state.getIn(['tickets']));

export const getErrorMessage = state => fromTickets.getErrorMessage(state.getIn(['tickets']));

export const getStopsFilter = state => fromSettings.getStopsFilter(state.getIn(['settings']));

export const getAllStops = state => fromSettings.getAllStops(state.getIn(['settings']));

export const getCurrency = state => fromSettings.getCurrency(state.getIn(['settings']));

export const getTickets = createSelector(
  state => state.getIn(['tickets']),
  getAllTicketIds,
  getAllTickets,
  getStopsFilter,
  (ticketsStore, allIds, tickets, stopsFilter) => {
    if (stopsFilter === null) {
      return [allIds, tickets];
    } else if (stopsFilter.length === 0) {
      return [[], []];
    }

    const filteredIds = allIds.filter((id) => {
      const stops = fromTickets.getTicketStops(ticketsStore, id);
      return stopsFilter.includes(stops);
    });

    return [filteredIds, tickets];
  },
);
