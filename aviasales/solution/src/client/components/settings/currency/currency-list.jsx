import React from 'react';

import { RUSSIAN_ROUBLE, currencyAliases } from '~/config/currencies'; // eslint-disable-line import/no-unresolved, import/extensions

function handleItemChange(handleChangeCurrency) {
  return ({ value }) => {
    handleChangeCurrency(value);
  };
}

const CurrencyList = ({ currency, handleChangeCurrency }) => {
  const handleItemChange = handleItemChange(handleChangeCurrency);

  return (
    <div>
      {
        Object.keys(currencyAliases).map(currencyKey => (
          <label key={currencyKey}>
            {currencyAliases[currencyKey]}
            <input
              type="radio"
              value={currencyKey}
              checked={currencyKey === currency}
              onChange={handleItemChange}
            />
          </label>
        ))
      }
    </div>
  );
};

CurrencyList.defaultProps = {
  currency: RUSSIAN_ROUBLE,
};

export default CurrencyList;