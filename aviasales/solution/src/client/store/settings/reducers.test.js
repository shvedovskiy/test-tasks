import Immutable from 'seamless-immutable';

import reducer from './reducers';
import * as types from './action-types';


describe('settings reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      filter: { stops: {} },
      currency: 'Russian Rouble',
    });
  });

  it('should handle CHANGE_CURRENCY', () => {
    const state = Immutable({
      filter: {
        stops: {
          0: true,
          1: false,
          2: true,
        },
      },
      currency: 'Russian Rouble',
    });
    const action = {
      type: types.CHANGE_CURRENCY,
      currency: 'US Dollar',
    };
    const transformedState = {
      filter: {
        stops: {
          0: true,
          1: false,
          2: true,
        },
      },
      currency: 'US Dollar',
    };
    expect(reducer(state, action)).toEqual(transformedState);
  });

  it('should handle SET_STOPS_FILTER', () => {
    const state = Immutable({
      filter: { stops: {} },
      currency: 'Russian Rouble',
    });
    const action = {
      type: types.SET_STOPS_FILTER,
      stops: {
        0: true,
        1: false,
        2: false,
      },
    };
    const transformedState = {
      filter: {
        stops: {
          0: true,
          1: false,
          2: false,
        },
      },
      currency: 'Russian Rouble',
    };
    expect(reducer(state, action)).toEqual(transformedState);
  });

  it('should handle SET_STOPS_FILTER when state already has stops filter', () => {
    const state = Immutable({
      filter: {
        stops: {
          0: false,
          1: false,
        },
      },
      currency: 'Russian Rouble',
    });
    const action = {
      type: types.SET_STOPS_FILTER,
      stops: {
        0: true,
        1: true,
        2: true,
      },
    };
    const transformedState = {
      filter: {
        stops: {
          0: true,
          1: true,
          2: true,
        },
      },
      currency: 'Russian Rouble',
    };
    expect(reducer(state, action)).toEqual(transformedState);
  });

  it('should handle CHANGE_STOPS_FILTER', () => {
    const state = Immutable({
      filter: {
        stops: {
          0: true,
          1: false,
          2: false,
        },
      },
      currency: 'Russian Rouble',
    });
    const action = {
      type: types.CHANGE_STOPS_FILTER,
      stops: {
        1: true,
      },
    };
    const transformedState = {
      filter: {
        stops: {
          0: true,
          1: true,
          2: false,
        },
      },
      currency: 'Russian Rouble',
    };
    expect(reducer(state, action)).toEqual(transformedState);
  });

  it('should handle CHANGE_STOPS_FILTER without any stops in store', () => {
    const state = Immutable({
      filter: { stops: {} },
      currency: 'Russian Rouble',
    });
    const action = {
      type: types.CHANGE_STOPS_FILTER,
      stops: { 1: true },
    };
    const transformedState = {
      filter: {
        stops: { 1: true },
      },
      currency: 'Russian Rouble',
    };
    expect(reducer(state, action)).toEqual(transformedState);
  });

  it('should handle CHANGE_STOPS_FILTER which containing same payload as those stored in state', () => {
    const state = Immutable({
      filter: {
        stops: {
          0: true,
          1: false,
          2: false,
        },
      },
      currency: 'Russian Rouble',
    });
    const action = {
      type: types.CHANGE_STOPS_FILTER,
      stops: {
        0: true,
        1: false,
        2: false,
      },
    };
    const transformedState = {
      filter: {
        stops: {
          0: true,
          1: false,
          2: false,
        },
      },
      currency: 'Russian Rouble',
    };
    expect(reducer(state, action)).toEqual(transformedState);
  });
});
