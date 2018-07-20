import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';

import * as actionTypes from 'src/store/settings/action-types';
import * as actions from 'src/store/settings/actions';


const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Tickets action creators', () => {
  afterEach(() => {
    fetchMock.reset();
    fetchMock.restore();
  });

  it('should create an action to fetch tickets', () => {
    const expectedAction = {
      type: actionTypes.FETCH_TICKETS_REQUEST,
    };
    expect(actions.requestTickets()).toEqual(expectedAction);
  });

  it('create FETCH_TICKETS_SUCCESS when fetching todos has been done', () => {
    fetchMock('/tickets', {
      body: {

      },
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const expectedActions = [
      { type: actionTypes.FETCH_TICKETS_REQUEST },
      {
        type: actionTypes.FETCH_TICKETS_SUCCESS,
        tickets: {
          '000': {
            id: '000',
            carrier: 'ТК',
            price: '15550',
            stops: '3',
            origin: {
              code: 'ORG',
              name: 'Origin Name',
              date: '12 May 2018, Вс',
              time: '12:00',
            },
            destination: {
              code: 'DST',
              name: 'Destination Name',
              date: '12 May 2018, Вс',
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
              date: '15 May 2018, Вс',
              time: '20:00',
            },
            destination: {
              code: 'DST',
              name: 'Destination Name',
              date: '15 May 2018, Вс',
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
              date: '11 May 2018, Вс',
              time: '12:00',
            },
            destination: {
              code: 'DST',
              name: 'Destination Name',
              date: '11 May 2018, Вс',
              time: '18:00',
            },
          },
        },
        ids: ['000', '001', '002'],
      },
    ];
    const store = mockStore({

    });

    return store.dispatch(actions.fetcticketsIfNeeded())
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      })
  });
});
