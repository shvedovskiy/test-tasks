import { RUSSIAN_ROUBLE, currencyAliases } from '~/config/currency';
import { FIXER_API_KEY } from '~/config';


class CurrencyService {
  API_ENDPOINT = 'http://data.fixer.io/api';
  symbols = Object.values(currencyAliases).join(',');
  rates = {
    [currencyAliases[RUSSIAN_ROUBLE]]: 1,
  };

  async fetchCurrencies() {
    const url = `${this.API_ENDPOINT}/latest?access_key=${FIXER_API_KEY}&symbols=${this.symbols}`;
    const response = await fetch(url, {
      method: 'GET',
    });

    if (!response.ok) {
      throw new Error('Currency fetching failed');
    }

    const data = await response.json();
    const coefficient = data.rates[currencyAliases[RUSSIAN_ROUBLE]];
    const rates = _.mapValues(data.rates, value => Number((value / coefficient).toFixed(2)));

    this.rates = {
      ...this.rates,
      ...rates,
    };
  }

  getPrice(price, currency) {
    const rates = this.getRates();
    const convertIndex = rates[currencyAliases[currency]];

    if (convertIndex) {
      return price * convertIndex;
    }
    return null;
  }

  getRates() {
    return this.rates;
  }

  getRatesNames() {
    return Object.keys(this.rates);
  }
}

export default new CurrencyService();
