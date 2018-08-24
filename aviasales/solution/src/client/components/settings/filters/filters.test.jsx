/* eslint-disable no-undef */
import React from 'react';

import { Filters } from './filters';


describe('<Filters />', () => {
  const props = {
    render: jest.fn(),
    stops: {
      '0': true,
      '1': false,
      '2': false,
    },
    changeStops: jest.fn(),
  };
  const filters = shallow(<Filters {...props} />);

  it('renders properly', () => {
    expect(filters).toMatchSnapshot();
  });
});
