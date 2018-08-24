/* eslint-disable no-undef */
import React from 'react';

import Stops from './stops';


describe('<Stops />', () => {
  const props = {
    stops: {
      '0': true,
      '1': false,
      '2': false,
    },
    changeStops: jest.fn(),
  };
  const stops = shallow(<Stops {...props} />);

  it('renders properly', () => {
    expect(stops).toMatchSnapshot();
  });
});
