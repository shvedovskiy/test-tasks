// @flow
import _ from 'lodash';

import { RUSSIAN_ROUBLE, currencyAliases } from 'src/config/currency';
import { FIXER_API_KEY } from 'src/config';


class CurrencyService {
  API_ENDPOINT = 'http://data.fixer.io/api';
  symbols = Object.values(currencyAliases).join(',');
  rates = {
    [currencyAliases[RUSSIAN_ROUBLE]]: 1,
  };

  async fetchCurrencies() {
    const url = `${this.API_ENDPOINT}/latest?access_key=${FIXER_API_KEY}&symbols=${this.symbols}`;
    let response;

    try {
      response = await fetch(url, {
        method: 'GET',
      });
    } catch (error) {
      throw new Error('Currency fetching failed');
    }

    if (!response.ok) {
      throw new Error('Currency fetching failed');
    }

    const { rates } = await response.json();
    const coefficient = rates[currencyAliases[RUSSIAN_ROUBLE]];
    const newRates = _.mapValues(rates, value => Number((value / coefficient).toFixed(2)));

    this.rates = {
      ...this.rates,
      ...newRates,
    };
  }

  getPrice(price, currency) {
    const rates = this.getRates();
    const convertIndex = rates[currencyAliases[currency]];
    let result;

    if (convertIndex) {
      result = Number.parseFloat(price) * convertIndex;
    }
    return (result && !Number.isNaN(result)) ? result : null;
  }

  getRates() {
    return this.rates;
  }

  getRatesNames() {
    return Object.keys(this.rates);
  }
}

export default new CurrencyService();
