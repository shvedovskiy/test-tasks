import Immutable from 'seamless-immutable';

import * as selectors from './selectors';


describe('Tickets selectors', () => {
  it('select isFetching', () => {
    const state = Immutable({
      data: {},
      ids: [],
      isFetching: true,
      errorMessage: '',
    });
    expect(selectors.getIsFetching(state)).toEqual(true);
  });

  it('select errorMessage', () => {
    const state = Immutable({
      data: {},
      ids: [],
      isFetching: false,
      errorMessage: 'An error has occured',
    });
    expect(selectors.getErrorMessage(state)).toEqual('An error has occured');
  });

  it('select sorted ids', () => {
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
    expect(selectors.getSortedIds(state)).toEqual(['0', '1', '2']);
  });

  it('select sorted ids when is no tickets data', () => {
    const state = Immutable({
      data: {},
      ids: [],
      isFetching: false,
      errorMessage: '',
    });
    expect(selectors.getSortedIds(state)).toEqual([]);
  });

  it('select tickets', () => {
    const tickets = {
      0: {
        id: '0',
        price: '12500',
        stops: '1',
        carrier: 'Carrier 1',
        origin: {
          code: 'ORG',
          name: 'Origin',
          date: '12 May 2018, Вс',
          time: '15:25',
        },
        destination: {
          code: 'DST',
          name: 'Destination',
          date: '12 May 2018, Вс',
          time: '17:50',
        },
      },
      1: {
        id: '1',
        price: '25550',
        stops: '2',
        carrier: 'Carrier 2',
        origin: {
          code: 'ORG',
          name: 'Origin',
          date: '15 Oct 2018, Вт',
          time: '19:15',
        },
        destination: {
          code: 'DST',
          name: 'Destination',
          date: '15 Oct 2018, Вт',
          time: '22:00',
        },
      },
      2: {
        id: '2',
        price: '7900',
        stops: '0',
        carrier: 'Carrier 3',
        origin: {
          code: 'ORG',
          name: 'Origin',
          date: '1 Jun 2018, Чт',
          time: '23:33',
        },
        destination: {
          code: 'DST',
          name: 'Destination',
          date: '2 Jun 2018, Пт',
          time: '03:18',
        },
      },
    };
    const state = Immutable({
      data: tickets,
      ids: ['0', '1', '2'],
      isFetching: false,
      errorMessage: '',
    });
    expect(selectors.getTickets(state)).toEqual(tickets);
  });

  it('select certain ticket', () => {
    const tickets = {
      0: {
        id: '0',
        price: '12500',
        stops: '1',
        carrier: 'Carrier 1',
        origin: {
          code: 'ORG',
          name: 'Origin',
          date: '12 May 2018, Вс',
          time: '15:25',
        },
        destination: {
          code: 'DST',
          name: 'Destination',
          date: '12 May 2018, Вс',
          time: '17:50',
        },
      },
      1: {
        id: '1',
        price: '25550',
        stops: '2',
        carrier: 'Carrier 2',
        origin: {
          code: 'ORG',
          name: 'Origin',
          date: '15 Oct 2018, Вт',
          time: '19:15',
        },
        destination: {
          code: 'DST',
          name: 'Destination',
          date: '15 Oct 2018, Вт',
          time: '22:00',
        },
      },
      2: {
        id: '2',
        price: '7900',
        stops: '0',
        carrier: 'Carrier 3',
        origin: {
          code: 'ORG',
          name: 'Origin',
          date: '1 Jun 2018, Чт',
          time: '23:33',
        },
        destination: {
          code: 'DST',
          name: 'Destination',
          date: '2 Jun 2018, Пт',
          time: '03:18',
        },
      },
    };
    const state = Immutable({
      data: tickets,
      ids: ['0', '1', '2'],
      isFetching: false,
      errorMessage: '',
    });
    expect(selectors.getTicket(state, 2)).toEqual({
      id: '2',
      price: '7900',
      stops: '0',
      carrier: 'Carrier 3',
      origin: {
        code: 'ORG',
        name: 'Origin',
        date: '1 Jun 2018, Чт',
        time: '23:33',
      },
      destination: {
        code: 'DST',
        name: 'Destination',
        date: '2 Jun 2018, Пт',
        time: '03:18',
      },
    });
  });

  it('select stops of certain tickets', () => {
    const tickets = {
      0: {
        id: '0',
        price: '12500',
        stops: '1',
        carrier: 'Carrier 1',
        origin: {
          code: 'ORG',
          name: 'Origin',
          date: '12 May 2018, Вс',
          time: '15:25',
        },
        destination: {
          code: 'DST',
          name: 'Destination',
          date: '12 May 2018, Вс',
          time: '17:50',
        },
      },
      1: {
        id: '1',
        price: '25550',
        stops: '2',
        carrier: 'Carrier 2',
        origin: {
          code: 'ORG',
          name: 'Origin',
          date: '15 Oct 2018, Вт',
          time: '19:15',
        },
        destination: {
          code: 'DST',
          name: 'Destination',
          date: '15 Oct 2018, Вт',
          time: '22:00',
        },
      },
      2: {
        id: '2',
        price: '7900',
        stops: '0',
        carrier: 'Carrier 3',
        origin: {
          code: 'ORG',
          name: 'Origin',
          date: '1 Jun 2018, Чт',
          time: '23:33',
        },
        destination: {
          code: 'DST',
          name: 'Destination',
          date: '2 Jun 2018, Пт',
          time: '03:18',
        },
      },
    };
    const state = Immutable({
      data: tickets,
      ids: ['0', '1', '2'],
      isFetching: false,
      errorMessage: '',
    });
    expect(selectors.getTicketStops(state, 1)).toEqual('2');
  });
});
