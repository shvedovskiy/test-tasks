import _ from 'lodash';

import {
  CHANGE_CURRENCY,
  SET_STOPS_FILTER,
  CHANGE_STOPS_FILTER,
} from './action-types';


export const changeCurrency = currency => ({
  type: CHANGE_CURRENCY,
  payload: { currency },
});

export const setStopsFilter = (...stopsArray) => {
  let stops = {};

  if (stopsArray.length > 0) {
    const minStop = _.min(stopsArray);
    stops = _.zipObject(stopsArray, _.map(stopsArray, stop => stop === minStop));
  }

  return {
    type: SET_STOPS_FILTER,
    payload: { stops },
  };
};

export const changeStopsFilter = changedStops => ({
  type: CHANGE_STOPS_FILTER,
  payload: {
    stops: changedStops,
  },
});
