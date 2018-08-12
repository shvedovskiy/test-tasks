import Immutable from 'seamless-immutable';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';

import * as settingsTypes from 'src/store/settings/action-types';
import * as types from './action-types';
import * as actions from './actions';


const mockStore = configureMockStore([thunk]);

describe('Tickets action creators', () => {
  afterEach(() => {
    fetchMock.reset();
    fetchMock.restore();
  });

  it('does not fetch tickets if there are other active requests', () => {
    const expectedActions = [];
    const store = mockStore(Immutable({
      tickets: {
        data: {},
        ids: [],
        isFetching: true,
        errorMessage: '',
      },
      settings: { filter: { stops: {} } },
      currency: 'Russian Rouble',
    }));

    return store.dispatch(actions.fetchTicketsAction())
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });

  it('create FETCH_TICKETS_SUCCESS when fetching tickets has been done', () => {
    fetchMock.getOnce('/api/tickets', {
      body: JSON.stringify({
        tickets: [
          {
            id: '000',
            carrier: 'ТК',
            price: '15550',
            stops: '3',
            origin: 'ORG',
            origin_name: 'Origin Name',
            departure_date: '12.05.18',
            departure_time: '12:00',
            destination: 'DST',
            destination_name: 'Destination Name',
            arrival_date: '12.05.18',
            arrival_time: '15:00',
          },
          {
            id: '001',
            carrier: 'SU',
            price: '17500',
            stops: '1',
            origin: 'ORG',
            origin_name: 'Origin Name',
            departure_date: '15.05.18',
            departure_time: '20:00',
            destination: 'DST',
            destination_name: 'Destination Name',
            arrival_date: '15.05.18',
            arrival_time: '21:30',
          },
          {
            id: '002',
            carrier: 'BA',
            price: '20050',
            stops: '0',
            origin: 'ORG',
            origin_name: 'Origin Name',
            departure_date: '11.05.18',
            departure_time: '12:00',
            destination: 'DST',
            destination_name: 'Destination Name',
            arrival_date: '11.05.18',
            arrival_time: '18:00',
          },
        ],
      }),
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
    });

    const expectedActions = [
      {
        type: settingsTypes.SET_STOPS_FILTER,
        stops: {},
      },
      { type: types.FETCH_TICKETS_REQUEST },
      {
        type: settingsTypes.SET_STOPS_FILTER,
        stops: { 0: true, 1: false, 3: false },
      },
      {
        type: types.FETCH_TICKETS_SUCCESS,
        tickets: {
          '000': {
            id: '000',
            carrier: 'ТК',
            price: '15550',
            stops: '3',
            origin: {
              code: 'ORG',
              name: 'Origin Name',
              date: '12 мая 2018, Сб',
              time: '12:00',
            },
            destination: {
              code: 'DST',
              name: 'Destination Name',
              date: '12 мая 2018, Сб',
              time: '15:00',
            },
          },
          '001': {
            id: '001',
            carrier: 'SU',
            price: '17500',
            stops: '1',
            origin: {
              code: 'ORG',
              name: 'Origin Name',
              date: '15 мая 2018, Вт',
              time: '20:00',
            },
            destination: {
              code: 'DST',
              name: 'Destination Name',
              date: '15 мая 2018, Вт',
              time: '21:30',
            },
          },
          '002': {
            id: '002',
            carrier: 'BA',
            price: '20050',
            stops: '0',
            origin: {
              code: 'ORG',
              name: 'Origin Name',
              date: '11 мая 2018, Пт',
              time: '12:00',
            },
            destination: {
              code: 'DST',
              name: 'Destination Name',
              date: '11 мая 2018, Пт',
              time: '18:00',
            },
          },
        },
        ids: ['000', '001', '002'],
      },
    ];
    const store = mockStore(Immutable({
      tickets: {
        data: {},
        ids: [],
        isFetching: false,
        errorMessage: '',
      },
    }));

    return store.dispatch(actions.fetchTicketsAction())
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });

  it('create FETCH_TICKETS_FAILURE when fetching tickets has been done with error', () => {
    fetchMock.getOnce('/api/tickets', {
      throws: { message: 'Fetching error' },
    });

    const expectedActions = [
      {
        type: settingsTypes.SET_STOPS_FILTER,
        stops: {},
      },
      { type: types.FETCH_TICKETS_REQUEST },
      {
        type: types.FETCH_TICKETS_FAILURE,
        errorMessage: 'Fetching error',
      },
    ];
    const store = mockStore(Immutable({
      tickets: {
        data: {},
        ids: [],
        isFetching: false,
        errorMessage: '',
      },
    }));

    return store.dispatch(actions.fetchTicketsAction())
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });

  it('does not produce actions after ticket buying', () => {
    const expectedAction = {
      type: types.BUY_TICKET,
      id: '1',
    };

    expect(actions.buyTicket('1')).toEqual(expectedAction);
  });
});
