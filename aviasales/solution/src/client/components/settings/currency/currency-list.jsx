import React from 'react';

import { currencyAliases } from '~/config/currencies';


const CurrencyList = ({ currency, changeCurrency }) => {
  function handleItemChange(e) {
    const currency = e.target.value;
    changeCurrency(currency);
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
