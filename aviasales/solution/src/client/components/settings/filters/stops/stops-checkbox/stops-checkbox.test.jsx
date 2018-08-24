/* eslint-disable no-undef */
import React from 'react';

import StopsCheckbox from './stops-checkbox';


describe('<StopsCheckbox />', () => {
  const props = {
    id: 'stops-0',
    checked: false,
    value: '0',
    onChange: jest.fn(),
  };
  const stopsCheckbox = shallow(<StopsCheckbox {...props} />);

  it('renders properly', () => {
    expect(stopsCheckbox).toMatchSnapshot();
  });
});
