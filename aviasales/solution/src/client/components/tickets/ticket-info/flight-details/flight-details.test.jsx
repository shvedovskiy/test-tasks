/* eslint-disable no-undef */
import React from 'react';

import FlightDetails from './flight-details';


describe('<FlightDetails />', () => {
  const props = {
    origin: {
      code: 'ORG',
      name: 'Origin Name',
      date: '12 янв 2018, Сб',
      time: '13:00',
    },
    destination: {
      code: 'DST',
      name: 'Destination Name',
      date: '12 янв 2018, Сб',
      time: '19:00',
    },
    stops: '1',
  };
  const flightDetals = shallow(<FlightDetails {...props} />);

  it('renders properly', () => {
    expect(flightDetals).toMatchSnapshot();
  });
});
