/* eslint-disable no-undef */
import React from 'react';

import TicketInfo from './ticket-info';


describe('<TicketInfo />', () => {
  const props = {
    carrier: 'S7',
    origin: {
      code: 'ORG',
      name: 'Origin Name',
      date: '12 окт 2018, Пт',
      time: '12:00',
    },
    destination: {
      code: 'DST',
      name: 'Destination Name',
      date: '12 окт 2018, Пт',
      time: '12:00',
    },
    stops: '2',
  };
  const ticketInfo = shallow(<TicketInfo {...props} />);

  it('renders properly', () => {
    expect(ticketInfo).toMatchSnapshot();
  });
});
