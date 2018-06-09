import { createSelector } from 'reselect';
import _ from 'lodash';

import * as filterMethods from './filter-methods';


export const getCurrency = state => state.getIn(['currency']);

export const getAllStops = state => state.getIn(['filter', 'stops']);

const getStopsFilter = createSelector(
  getAllStops,
  (allStops) => {
    if (Object.values(allStops).every(stop => stop === true)) {
      return null;
    }
    return _.keys(_.pickBy(allStops), stop => stop === true);
  },
);

export const getFilters = state => ({
  stops: getStopsFilter(state),
  /*
  * Add filter's state selector here.
  * If filter isn't active, its selector must return null.
  * The key must be equal to the name of corresponding filter method.
  */
});

export const getFilteredIds = (fromTickets, ticketsStore, allIds, filters) => {
  if (Object.values(filters).every(f => f === null)) {
    return null;
  }

  let filteredIds = [...allIds];
  for (const name of Object.keys(filters)) {
    filteredIds = filterMethods[name](fromTickets, ticketsStore, filteredIds, filters[name]);
  }
  return filteredIds;
};
