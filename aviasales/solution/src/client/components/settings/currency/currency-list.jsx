import React from 'react';

import { RUSSIAN_ROUBLE, currencyAliases } from '~/config/currency'; // eslint-disable-line import/no-unresolved, import/extensions


function _handleItemChange(handleChangeCurrency) {
  return ({ target: { value }}) => {
    handleChangeCurrency(value);
  };
}

const CurrencyList = ({ selectedCurrency, aliases, handleChangeCurrency }) => {
  const handleItemChange = _handleItemChange(handleChangeCurrency);

  return (
    <div>
      {Object.keys(aliases).map(currencyName => (
        <label key={currencyName}>
          {aliases[currencyName]}
          <input
            type="radio"
            value={currencyName}
            checked={currencyName === selectedCurrency}
            onChange={handleItemChange}
          />
        </label>
      ))}
    </div>
  );
};

CurrencyList.defaultProps = {
  currency: RUSSIAN_ROUBLE,
  aliases: {
    [RUSSIAN_ROUBLE]: currencyAliases[RUSSIAN_ROUBLE],
  },
};

export default CurrencyList;
