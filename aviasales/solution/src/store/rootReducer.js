import { combineReducers } from 'redux';

import tickets, * as fromTickets from './tickets/reducers';
import settings, * as fromSettings from './settings/reducers';


const rootReducer = combineReducers({
  tickets,
  settings,
});

export default rootReducer;

export const getIsFetching = (state) => fromTickets.getIsFetching(state.tickets);

export const getErrorMessage = (state) => fromTickets.getErrorMessage(state.tickets);

export const getFilteredTickets = (state, ...filters) => {
  const ids = fromTickets.getFilteredIds(state.tickets, ...filters);
  return ids.map(id => fromTickets.getTicket(state.tickets, id));
};

export const getCurrentFilters = (state) => fromSettings.getCurrentFilters(state.settings);
