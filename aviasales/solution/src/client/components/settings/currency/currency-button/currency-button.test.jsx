/* eslint-disable no-undef */
import React from 'react';

import CurrencyButton from './currency-button';


describe('<CurrencyButton />', () => {
  const props = {
    currencyName: 'Russian Rouble',
    checked: false,
    alias: 'RUB',
    handleChangeCurrency: jest.fn(),
  };
  const currencyButton = shallow(<CurrencyButton {...props} />);

  it('renders properly', () => {
    expect(currencyButton).toMatchSnapshot();
  });
});
