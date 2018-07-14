// @flow
import React from 'react';
import styled from 'styled-components';

import CurrencyButton from '../currency-button/currency-button';
import { RUSSIAN_ROUBLE, currencyAliases } from 'src/config/currency'; // eslint-disable-line import/first, import/no-unresolved, import/extensions


const CurrencySwitcher = styled.div`
  display: flex;
  padding: 0 15px;
`;

type Props = {|
  selectedCurrency: string,
  aliases: {
    [currencyName: string]: string,
  },
  handleChangeCurrency: Function,
|};

const CurrencyList = ({ selectedCurrency, aliases, handleChangeCurrency }: Props) => (
  <CurrencySwitcher>
    {Object.keys(aliases).map(currencyName => (
      <CurrencyButton
        key={currencyName}
        currencyName={currencyName}
        checked={currencyName === selectedCurrency}
        alias={aliases[currencyName]}
        handleChangeCurrency={handleChangeCurrency}
      />
    ))}
  </CurrencySwitcher>
);

CurrencyList.defaultProps = {
  selectedCurrency: RUSSIAN_ROUBLE,
  aliases: {
    [RUSSIAN_ROUBLE]: currencyAliases[RUSSIAN_ROUBLE],
  },
};

export default CurrencyList;
