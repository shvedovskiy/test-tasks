// @flow
import _ from 'lodash';

import { RUSSIAN_ROUBLE, currencyAliases } from 'src/config/currency';
import { FIXER_API_KEY } from 'shared/config';


type RatesType = {
  [string]: number,
};

class CurrencyService {
  API_ENDPOINT = 'http://data.fixer.io/api';

  symbols = Object.values(currencyAliases).join(',');

  rates: RatesType = {
    [currencyAliases[RUSSIAN_ROUBLE]]: 1,
  };

  async fetchCurrencies() {
    const url = `${this.API_ENDPOINT}/latest?access_key=${FIXER_API_KEY}&symbols=${this.symbols}`;
    let response;
    let fetchData: { rates: ?RatesType } = { rates: null };

    try {
      response = await fetch(url, { method: 'GET' });
      if (response.ok) {
        fetchData = await response.json();
      }
    } catch (err) {
      console.error('Currencies fetching failed'); // eslint-disable-line no-console
    }

    const { rates } = fetchData;
    if (rates !== null && rates !== undefined) {
      const coefficient = rates[currencyAliases[RUSSIAN_ROUBLE]];
      const newRates = _.mapValues(rates, value => Number((value / coefficient).toFixed(2)));
      this.rates = {
        ...this.rates,
        ...newRates,
      };
    }
  }

  getPrice(price: string, currency: string): ?number {
    const rates = this.getRates();
    const convertIndex: ?number = rates[currencyAliases[currency]];
    let result: ?number;

    if (convertIndex !== null && convertIndex !== undefined) {
      result = Number.parseFloat(price) * convertIndex;
    }
    return (result && !Number.isNaN(result)) ? result : null;
  }

  getRates(): RatesType {
    return this.rates;
  }

  getRatesNames(): Array<string> {
    return Object.keys(this.rates);
  }
}

export default new CurrencyService();
