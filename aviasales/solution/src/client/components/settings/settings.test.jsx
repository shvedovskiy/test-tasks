/* eslint-disable no-undef */
import React from 'react';

import Settings from './settings';


describe('<Settings />', () => {
  const settings = shallow(<Settings />);

  it('renders properly', () => {
    expect(settings).toMatchSnapshot();
  });
});
