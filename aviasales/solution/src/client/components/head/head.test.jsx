/* eslint-disable no-undef */
import React from 'react';

import Head from './head';


describe('<Head />', () => {
  const head = shallow(<Head />);

  it('renders properly', () => {
    expect(head).toMatchSnapshot();
  });
});
