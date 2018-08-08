import Immutable from 'seamless-immutable';

import * as fromTickets from '../tickets/selectors';
import * as selectors from './selectors';


describe('Settings selectors', () => {
  it('select currency', () => {
    const state = Immutable({
      filter: { stops: {} },
      currency: 'Russian Rouble',
    });
    expect(selectors.getCurrency(state)).toEqual('Russian Rouble');
  });

  it('select all stops', () => {
    const stops = {
      0: true,
      1: false,
      2: false,
    };
    const state = Immutable({
      filter: { stops },
      currency: 'Russian Rouble',
    });
    expect(selectors.getAllStops(state)).toEqual(stops);
  });

  it('select stops that are active filters', () => {
    const stops = {
      0: true,
      1: false,
      2: true,
    };
    const state = Immutable({
      filter: { stops },
      currency: 'Russian Rouble',
    });
    expect(selectors.getStopsFilter(state)).toEqual(['0', '2']);
  });

  it('select stops that are active filters when no one filter is active', () => {
    const stops = {
      0: false,
      1: false,
      2: false,
    };
    const state = Immutable({
      filter: { stops },
      currency: 'Russian Rouble',
    });
    expect(selectors.getStopsFilter(state)).toEqual([]);
  });

  it('select stops that are active filters when all filters are active', () => {
    const stops = {
      0: true,
      1: true,
      2: true,
    };
    const state = Immutable({
      filter: { stops },
      currency: 'Russian Rouble',
    });
    expect(selectors.getStopsFilter(state)).toBeNull();
  });

  it('select filters', () => {
    const stops = {
      0: true,
      1: false,
      2: false,
    };
    const state = Immutable({
      filter: { stops },
      currency: 'Russian Rouble',
    });
    expect(selectors.getFilters(state)).toEqual({ stops: ['0'] });
  });

  it('select only filtered ids', () => {
    const ticketsState = Immutable({
      data: {
        0: { id: '0', stops: '2' },
        1: { id: '1', stops: '0' },
        2: { id: '2', stops: '0' },
      },
      ids: ['0', '1', '2'],
      isFetching: false,
      errorMessage: '',
    });
    const ids = ['0', '1', '2'];
    const filters = { stops: ['0'] };
    expect(selectors.getFilteredIds(fromTickets, ticketsState, ids, filters)).toEqual(['1', '2']);
  });

  it('select no filtered ids when all filters are active', () => {
    const ticketsState = Immutable({
      data: {
        0: { id: '0', stops: '2' },
        1: { id: '1', stops: '0' },
        2: { id: '2', stops: '0' },
      },
      ids: ['0', '1', '2'],
      isFetching: false,
      errorMessage: '',
    });
    const ids = ['0', '1', '2'];
    const filters = { stops: null };
    expect(selectors.getFilteredIds(fromTickets, ticketsState, ids, filters)).toBeNull();
  });

  it('select no filtered ids when tickets store doesn\'t contain data', () => {
    const ticketsState = Immutable({
      data: {},
      ids: [],
      isFetching: false,
      errorMessage: '',
    });
    const ids = [];
    const filters = { stops: ['0'] };
    expect(selectors.getFilteredIds(fromTickets, ticketsState, ids, filters)).toEqual([]);
  });
});
