/* eslint-disable no-undef */
import React from 'react';

import BuyButton from './buy-button';


describe('<BuyButton />', () => {
  const props = {
    buyClick: jest.fn(),
  };
  const buyButton = shallow(<BuyButton {...props}>12500$</BuyButton>);

  it('renders properly', () => {
    expect(buyButton).toMatchSnapshot();
  });
});
