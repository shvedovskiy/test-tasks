import Immutable from 'seamless-immutable';

import { RUSSIAN_ROUBLE } from '~/config/currency'; // eslint-disable-line import/no-unresolved, import/extensions
import * as types from './action-types';


const initialState = Immutable.from({
  filter: {
    stops: {},
  },
  currency: RUSSIAN_ROUBLE,
});

const settings = (state = initialState, action) => {
  switch (action.type) {
    case types.CHANGE_CURRENCY: {
      return state.set('currency', action.payload.currency);
    }
    case types.SET_STOPS_FILTER: {
      return state.setIn(['filter', 'stops'], action.payload.stops);
    }
    case types.CHANGE_STOPS_FILTER: {
      return state.merge({
        filter: {
          stops: action.payload.stops,
        },
      }, { deep: true });
    }
    default: {
      return state.asMutable({ deep: true });
    }
  }
};

export default settings;
