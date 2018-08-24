/* eslint-disable no-undef */
import React from 'react';

import Search from './search';


describe('<Search />', () => {
  const search = shallow(<Search />);

  it('renders properly', () => {
    expect(search).toMatchSnapshot();
  });
});
