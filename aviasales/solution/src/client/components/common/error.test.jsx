/* eslint-disable no-undef */
import React from 'react';

import Error from './error';


describe('<Error />', () => {
  const props = {
    onRetry: jest.fn(),
    message: 'Some Error',
  };
  const error = shallow(<Error {...props} />);

  it('renders properly', () => {
    expect(error).toMatchSnapshot();
  });
});
