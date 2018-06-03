import { combineReducers } from 'redux-seamless-immutable';

import tickets from './tickets/reducers';
import settings from './settings/reducers';


const rootReducer = combineReducers({
  tickets,
  settings,
});

export default rootReducer;