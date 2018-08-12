import Immutable from 'seamless-immutable';

import * as selectors from './rootSelectors';


describe('root level selectors', () => {
  it('select filtered tickets', () => {
    const state = Immutable({
      tickets: {
        data: {
          0: {
            id: '0',
            price: '12500',
            stops: '1',
            carrier: 'SU',
            origin: {
              code: 'ORG',
              name: 'Origin Name',
              date: '12 мая 2018, Сб',
              time: '15:36',
            },
            destination: {
              code: 'DST',
              name: 'Destination Name',
              date: '12 мая 2018, Сб',
              time: '19:12',
            },
          },
          1: {
            id: '1',
            price: '12501',
            stops: '3',
            carrier: 'BA',
            origin: {
              code: 'ORG',
              name: 'Origin Name',
              date: '14 июл 2018, Вт',
              time: '21:01',
            },
            destination: {
              code: 'DST',
              name: 'Destination Name',
              date: '14 июл 2018, Вт',
              time: '23:50',
            },
          },
          2: {
            id: '2',
            price: '12502',
            stops: '2',
            carrier: 'TK',
            origin: {
              code: 'ORG',
              name: 'Origin Name',
              date: '29 янв 2018, Вс',
              time: '05:45',
            },
            destination: {
              code: 'DST',
              name: 'Destination Name',
              date: '29 янв 2018, Вс',
              time: '10:28',
            },
          },
          3: {
            id: '3',
            price: '12503',
            stops: '0',
            carrier: 'S7',
            origin: {
              code: 'ORG',
              name: 'Origin Name',
              date: '20 авг 2018, Пн',
              time: '01:44',
            },
            destination: {
              code: 'DST',
              name: 'Destination Name',
              date: '20 авг 2018, Пн',
              time: '06:00',
            },
          },
        },
        ids: ['0', '1', '2', '3'],
        isFetching: false,
        errorMessage: '',
      },
      settings: {
        filter: {
          stops: {
            0: true,
            1: true,
            2: false,
            3: false,
          },
        },
        currency: 'Russian Rouble',
      },
    });
    expect(selectors.getTickets(state)).toEqual([
      ['0', '3'],
      {
        0: {
          id: '0',
          price: '12500',
          stops: '1',
          carrier: 'SU',
          origin: {
            code: 'ORG',
            name: 'Origin Name',
            date: '12 мая 2018, Сб',
            time: '15:36',
          },
          destination: {
            code: 'DST',
            name: 'Destination Name',
            date: '12 мая 2018, Сб',
            time: '19:12',
          },
        },
        1: {
          id: '1',
          price: '12501',
          stops: '3',
          carrier: 'BA',
          origin: {
            code: 'ORG',
            name: 'Origin Name',
            date: '14 июл 2018, Вт',
            time: '21:01',
          },
          destination: {
            code: 'DST',
            name: 'Destination Name',
            date: '14 июл 2018, Вт',
            time: '23:50',
          },
        },
        2: {
          id: '2',
          price: '12502',
          stops: '2',
          carrier: 'TK',
          origin: {
            code: 'ORG',
            name: 'Origin Name',
            date: '29 янв 2018, Вс',
            time: '05:45',
          },
          destination: {
            code: 'DST',
            name: 'Destination Name',
            date: '29 янв 2018, Вс',
            time: '10:28',
          },
        },
        3: {
          id: '3',
          price: '12503',
          stops: '0',
          carrier: 'S7',
          origin: {
            code: 'ORG',
            name: 'Origin Name',
            date: '20 авг 2018, Пн',
            time: '01:44',
          },
          destination: {
            code: 'DST',
            name: 'Destination Name',
            date: '20 авг 2018, Пн',
            time: '06:00',
          },
        },
      },
    ]);
  });

  it('select all tickets when all filters are disabled', () => {
    const allTickets = {
      0: {
        id: '0',
        price: '12500',
        stops: '1',
        carrier: 'SU',
        origin: {
          code: 'ORG',
          name: 'Origin Name',
          date: '12 мая 2018, Сб',
          time: '15:36',
        },
        destination: {
          code: 'DST',
          name: 'Destination Name',
          date: '12 мая 2018, Сб',
          time: '19:12',
        },
      },
      1: {
        id: '1',
        price: '12501',
        stops: '3',
        carrier: 'BA',
        origin: {
          code: 'ORG',
          name: 'Origin Name',
          date: '14 июл 2018, Вт',
          time: '21:01',
        },
        destination: {
          code: 'DST',
          name: 'Destination Name',
          date: '14 июл 2018, Вт',
          time: '23:50',
        },
      },
      2: {
        id: '2',
        price: '12502',
        stops: '2',
        carrier: 'TK',
        origin: {
          code: 'ORG',
          name: 'Origin Name',
          date: '29 янв 2018, Вс',
          time: '05:45',
        },
        destination: {
          code: 'DST',
          name: 'Destination Name',
          date: '29 янв 2018, Вс',
          time: '10:28',
        },
      },
      3: {
        id: '3',
        price: '12503',
        stops: '0',
        carrier: 'S7',
        origin: {
          code: 'ORG',
          name: 'Origin Name',
          date: '20 авг 2018, Пн',
          time: '01:44',
        },
        destination: {
          code: 'DST',
          name: 'Destination Name',
          date: '20 авг 2018, Пн',
          time: '06:00',
        },
      },
    };
    const allIds = ['0', '1', '2', '3'];
    const state = Immutable({
      tickets: {
        data: allTickets,
        ids: allIds,
        isFetching: false,
        errorMessage: '',
      },
      settings: {
        filter: {
          stops: {
            0: true,
            1: true,
            2: true,
            3: true,
          },
        },
        currency: 'Russian Rouble',
      },
    });
    expect(selectors.getTickets(state)).toEqual([allIds, allTickets]);
  });

  it('select nothing when all filters are enabled', () => {
    const tickets = {
      0: { id: '0', stops: '1' },
      1: { id: '1', stops: '1' },
      2: { id: '2', stops: '3' },
    };
    const state = Immutable({
      tickets: {
        data: tickets,
        ids: ['0', '1', '2'],
        isFetching: false,
        errorMessage: '',
      },
      settings: {
        filter: {
          stops: { 1: false, 3: false },
        },
        currency: 'Russian Rouble',
      },
    });
    expect(selectors.getTickets(state)).toEqual([[], tickets]);
  });

  it('select nothing when there is no available tickets', () => {
    const state = Immutable({
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
    expect(selectors.getTickets(state)).toEqual([[], {}]);
  });
});
