/* eslint-disable no-undef */
import React from 'react';

import StopOnly from './stop-only';


describe('<StopOnly />', () => {
  const props = {
    handleSelect: jest.fn(),
  };
  const stopOnly = shallow(<StopOnly {...props} />);

  it('renders properly', () => {
    expect(stopOnly).toMatchSnapshot();
  });
});
