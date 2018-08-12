// @flow
import { createSelector } from 'reselect';
import _ from 'lodash';

import type { State as TicketsState } from 'src/store/tickets/types';
import type { State, StopsType, FiltersType } from './types';
import * as filterMethods from './filter-methods';


export const getCurrency = (state: State): string => state.getIn(['currency']);

export const getAllStops = (state: State): StopsType => state.getIn(['filter', 'stops']);

export const getStopsFilter = createSelector(
  getAllStops,
  (allStops: StopsType) => {
    // Return special value if filter is disabled (all stops are allowed to display):
    if (Object.values(allStops).every(stop => stop === true)) {
      return null;
    }
    // Return array with allowed stops or empty array if all stops are restricted:
    return _.keys(_.pickBy(allStops), stop => stop === true);
  },
);

export const getFilters = (state: State) => ({
  stops: getStopsFilter(state),
  /*
  * Add filter's state selector here.
  * If filter isn't active, its selector must return null.
  * The key must be equal to the name of corresponding filter method.
  */
});

export const getFilteredIds = (
  fromTickets: {},
  ticketsState: TicketsState,
  allIds: Array<string>,
  filters: FiltersType,
): ?Array<string> => {
  if (Object.values(filters).every(f => f === null)) {
    return null;
  }

  let filteredIds = [...allIds];
  for (const name of Object.keys(filters)) {
    filteredIds = filterMethods[name](fromTickets, ticketsState, filteredIds, filters[name]);
  }
  return filteredIds;
};
