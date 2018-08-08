import Immutable from 'seamless-immutable';

import reducer from './reducers';
import * as types from './action-types';


describe('tickets reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      data: {},
      ids: [],
      isFetching: false,
      errorMessage: '',
    });
  });

  it('should handle FETCH_TICKETS_REQUEST when state is empty', () => {
    const state = Immutable({
      data: {},
      ids: [],
      isFetching: false,
      errorMessage: '',
    });
    const action = { type: types.FETCH_TICKETS_REQUEST };
    const transformedState = {
      data: {},
      ids: [],
      isFetching: true,
      errorMessage: '',
    };
    expect(reducer(state, action)).toEqual(transformedState);
  });

  it('should handle FETCH_TICKETS_REQUEST when state already contains tickets', () => {
    const state = Immutable({
      data: {
        0: { id: '0' },
        1: { id: '1' },
        2: { id: '2' },
      },
      ids: ['0', '1', '2'],
      isFetching: false,
      errorMessage: '',
    });
    const action = { type: types.FETCH_TICKETS_REQUEST };
    const transformedState = {
      data: {},
      ids: [],
      isFetching: true,
      errorMessage: '',
    };
    expect(reducer(state, action)).toEqual(transformedState);
  });

  it('should handle FETCH_TICKETS_REQUEST when state has fetching error', () => {
    const state = Immutable({
      data: {},
      ids: [],
      isFetching: false,
      errorMessage: 'An error has occured',
    });
    const action = { type: types.FETCH_TICKETS_REQUEST };
    const transformedState = {
      data: {},
      ids: [],
      isFetching: true,
      errorMessage: '',
    };
    expect(reducer(state, action)).toEqual(transformedState);
  });

  it('should handle FETCH_TICKETS_SUCCESS', () => {
    const state = Immutable({
      data: {},
      ids: [],
      isFetching: true,
      errorMessage: '',
    });
    const action = {
      type: types.FETCH_TICKETS_SUCCESS,
      ids: ['0', '1', '2'],
      tickets: {
        0: { id: '0' },
        1: { id: '1' },
        2: { id: '2' },
      },
    };
    const transformedState = {
      data: {
        0: { id: '0' },
        1: { id: '1' },
        2: { id: '2' },
      },
      ids: ['0', '1', '2'],
      isFetching: false,
      errorMessage: '',
    };
    expect(reducer(state, action)).toEqual(transformedState);
  });

  it('should handle FETCH_TICKETS_FALIURE', () => {
    const state = Immutable({
      data: {},
      ids: [],
      isFetching: true,
      errorMessage: '',
    });
    const action = {
      type: types.FETCH_TICKETS_FAILURE,
      errorMessage: 'An error has occured',
    };
    const transformedState = {
      data: {},
      ids: [],
      isFetching: false,
      errorMessage: 'An error has occured',
    };
    expect(reducer(state, action)).toEqual(transformedState);
  });
});
