// @flow
import { combineReducers } from 'redux-seamless-immutable';

import ticketsReducer from './tickets/reducers';
import settingsReducer from './settings/reducers';


const rootReducer = combineReducers({
  tickets: ticketsReducer,
  settings: settingsReducer,
});

export default rootReducer;
