// @flow
import { combineReducers } from 'redux-seamless-immutable';

import ticketsReducer from './tickets/reducers';
import settingsReducer from './settings/reducers';

const reducers = {
  tickets: ticketsReducer,
  settings: settingsReducer,
};

export type Reducers = typeof reducers;

export default combineReducers(reducers);
