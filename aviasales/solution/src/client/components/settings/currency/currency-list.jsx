import React from 'react';

import { currencyAliases } from '~/config/currencies'; // eslint-disable-line import/no-unresolved, import/extensions


const CurrencyList = ({ currency, handleChangeCurrency }) => {
  function handleItemChange(e) {
    const newCurrency = e.target.value;
    handleChangeCurrency(newCurrency);
  }
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

export default CurrencyList;
