/* eslint-disable no-undef */
import React from 'react';

import Loading from './loading';


describe('<Loading />', () => {
  const loading = shallow(<Loading />);

  it('renders properly', () => {
    expect(loading).toMatchSnapshot();
  });
});
