import React from 'react';

import { RUSSIAN_ROUBLE, currencyAliases } from '~/config/currency'; // eslint-disable-line import/no-unresolved, import/extensions


function _handleItemChange(handleChangeCurrency) {
  return ({ target: { value }}) => {
    handleChangeCurrency(value);
  };
}

const CurrencyList = ({ currency, aliases, handleChangeCurrency }) => {
  const handleItemChange = _handleItemChange(handleChangeCurrency);

  return (
    <div>
      {Object.keys(aliases).map(currencyKey => (
        <label key={currencyKey}>
          {aliases[currencyKey]}
          <input
            type="radio"
            value={currencyKey}
            checked={currencyKey === currency}
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
