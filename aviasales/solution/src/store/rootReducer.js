import { combineReducers } from 'redux';

import tickets from './tickets/reducers';
import settings from './settings/reducers';


const rootReducer = combineReducers({
  tickets,
  settings,
});

export default rootReducer;
