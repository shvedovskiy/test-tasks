import { combineReducers } from 'redux-seamless-immutable';

import tickets, * as fromTickets from './tickets/reducers';
import settings, * as fromSettings from './settings/reducers';


const rootReducer = combineReducers({
  tickets,
  settings,
});

export default rootReducer;

export const getIsFetching = (state) =>
  fromTickets.getIsFetching(state.getIn(['tickets']));

export const getErrorMessage = (state) =>
  fromTickets.getErrorMessage(state.getIn(['tickets']));

export const getFilteredTickets = (state, ...filters) => {
  const ids = fromTickets.getFilteredIds(state.getIn(['tickets']), ...filters);
  return ids.map(id => fromTickets.getTicket(state.getIn(['tickets']), id));
};

export const getCurrentFilters = (state) =>
  fromSettings.getCurrentFilters(state.getIn(['settings']));

export const getCurrency = (state) =>
  fromSettings.getCurrency(state.getIn(['settings']));