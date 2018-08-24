/* eslint-disable no-undef */
import React from 'react';

import EmptyResult from './empty-result';


describe('<EmptyResult />', () => {
  const emptyResult = shallow(<EmptyResult />);

  it('renders properly', () => {
    expect(emptyResult).toMatchSnapshot();
  });
});
