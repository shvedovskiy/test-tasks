/* eslint-disable no-undef */
import React from 'react';

import CurrencyList from './currency-list';


describe('<CurrencyList />', () => {
  const props = {
    selectedCurrency: 'Russian Rouble',
    aliases: {
      'Russian Rouble': 'RUB',
      'US Dollar': 'USD',
      'Euro': 'EUR',
    },
    handleChangeCurrency: jest.fn(),
  };
  const currencyList = shallow(<CurrencyList {...props} />);

  it('renders properly', () => {
    expect(currencyList).toMatchSnapshot();
  });
});
