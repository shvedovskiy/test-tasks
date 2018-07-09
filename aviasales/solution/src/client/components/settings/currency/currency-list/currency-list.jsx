import React from 'react';
import styled from 'styled-components';

import CurrencyButton from '../currency-button/currency-button.jsx';
import { RUSSIAN_ROUBLE, currencyAliases } from '~/config/currency'; // eslint-disable-line import/no-unresolved, import/extensions


const CurrencySwitcher = styled.div`
  display: flex;
  padding: 0 15px;
`;

const CurrencyList = ({ selectedCurrency, aliases, handleChangeCurrency }) => (
  <CurrencySwitcher>
    {Object.keys(aliases).map(currencyName =>
      <CurrencyButton
        key={currencyName}
        currencyName={currencyName}
        checked={currencyName === selectedCurrency}
        alias={aliases[currencyName]}
        handleChangeCurrency={handleChangeCurrency}
      />
    )}
  </CurrencySwitcher>
);

CurrencyList.defaultProps = {
  currency: RUSSIAN_ROUBLE,
  aliases: {
    [RUSSIAN_ROUBLE]: currencyAliases[RUSSIAN_ROUBLE],
  },
};

export default CurrencyList;
