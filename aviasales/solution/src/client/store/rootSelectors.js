// @flow
import { createSelector } from 'reselect';

import * as fromTickets from './tickets/selectors';
import * as fromSettings from './settings/selectors';
import type { State } from './types';
import type { State as TicketsState, TicketsType } from './tickets/types';
import type { StopsType, FiltersType } from './settings/types';


const getAllTicketIds = (state: State): Array<string> => fromTickets.getSortedIds(state.getIn(['tickets']));

const getAllTickets = (state: State): TicketsType => fromTickets.getTickets(state.getIn(['tickets']));

const getFilters = (state: State): FiltersType => fromSettings.getFilters(state.getIn(['settings']));

export const getCurrency = (state: State): string => fromSettings.getCurrency(state.getIn(['settings']));

export const getIsFetching = (state: State): boolean => fromTickets.getIsFetching(state.getIn(['tickets']));

export const getErrorMessage = (state: State): string => fromTickets.getErrorMessage(state.getIn(['tickets']));

export const getAllStops = (state: State): StopsType => fromSettings.getAllStops(state.getIn(['settings']));

const composeIdsTickets = (
  ticketsState: TicketsState,
  allIds: Array<string>,
  tickets: TicketsType,
  filters: FiltersType,
) => {
  const ids = fromSettings.getFilteredIds(fromTickets, ticketsState, allIds, filters);
  if (ids === null || ids === undefined) {
    return [allIds, tickets];
  }
  if (ids.length <= 0) {
    return [[], tickets];
  }
  return [ids, tickets];
};

export const getTickets: (State) => [Array<string>, TicketsType] = createSelector(
  [
    (state: State): TicketsState => state.getIn(['tickets']),
    getAllTicketIds,
    getAllTickets,
    getFilters,
  ],
  composeIdsTickets,
);
