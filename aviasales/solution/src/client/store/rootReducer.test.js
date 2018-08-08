import Immutable from 'seamless-immutable';

import reducer from './rootReducer';


describe('root reducer', () => {
  it('initializes the default state', () => {
    expect(reducer(Immutable({}), {})).toEqual({
      tickets: {
        data: {},
        ids: [],
        isFetching: false,
        errorMessage: '',
      },
      settings: {
        filter: { stops: {} },
        currency: 'Russian Rouble',
      },
    });
  });
});
