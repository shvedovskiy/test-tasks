// @flow
import type { Immutable } from 'seamless-immutable';

import type { ExtractReturn } from 'src/store/types';
import * as actions from './actions';


export type FiltersType = {
  [filter: string]: ?Array<string>,
};

export type StopsType = {
  [stop: string]: boolean,
};

export type Actions =
  ExtractReturn<typeof actions.changeCurrency> |
  ExtractReturn<typeof actions.setStopsFilter> |
  ExtractReturn<typeof actions.changeStopsFilter>;

export type StateShape = {
  +filter: {
    +stops: StopsType,
  },
  +currency: string,
};

export type State = Immutable<StateShape>;
