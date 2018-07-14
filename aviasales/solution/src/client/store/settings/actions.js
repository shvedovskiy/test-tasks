// @flow
import _ from 'lodash';

import * as types from './action-types';
import type { StopsType } from './types';


export const changeCurrency = (currency: string) => ({
  type: types.CHANGE_CURRENCY,
  currency,
});

export const setStopsFilter = (...stopsCountings: Array<{ [stop: string]: string }>) => {
  let stops = {};
  if (stopsCountings.length > 0) {
    const minStop = _.min(stopsCountings);
    stops = _.zipObject(stopsCountings, _.map(stopsCountings, stop => stop === minStop));
  }

  return {
    type: types.SET_STOPS_FILTER,
    stops,
  };
};

export const changeStopsFilter = (changedStops: StopsType) => ({
  type: types.CHANGE_STOPS_FILTER,
  stops: changedStops,
});
