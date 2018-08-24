/* eslint-disable no-undef */
import React from 'react';

import Message from './message';


describe('<Message />', () => {
  const message = shallow(<Message>Some Message</Message>);

  it('renders properly', () => {
    expect(message).toMatchSnapshot();
  });
});
