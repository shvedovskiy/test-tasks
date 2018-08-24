/* eslint-disable no-undef */
import React from 'react';

import { Currency } from './currency';


describe('<Currency />', () => {
  const props = {
    selectedCurrency: 'Russian Rouble',
    handleChangeCurrency: jest.fn(),
  };
  const currency = shallow(<Currency {...props} />);

  it('renders properly', () => {
    expect(currency).toMatchSnapshot();
  });
});
