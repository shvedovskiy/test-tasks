import _ from 'lodash';

import * as types from './action-types';


export const changeCurrency = currency => ({
  type: types.CHANGE_CURRENCY,
  payload: { currency },
});

export const setStopsFilter = (...stopsArray) => {
  let stops = {};

  if (stopsArray.length > 0) {
    const minStop = _.min(stopsArray);
    stops = _.zipObject(stopsArray, _.map(stopsArray, stop => stop === minStop));
  }

  return {
    type: types.SET_STOPS_FILTER,
    payload: { stops },
  };
};

export const changeStopsFilter = changedStops => ({
  type: types.CHANGE_STOPS_FILTER,
  payload: {
    stops: changedStops,
  },
});
