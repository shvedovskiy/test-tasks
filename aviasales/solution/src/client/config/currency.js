// @flow
export const RUSSIAN_ROUBLE = 'Russian Rouble';
export const US_DOLLAR = 'US Dollars';
export const EURO = 'Euro';

export const currencySymbols: { [string]: string } = {
  [RUSSIAN_ROUBLE]: '₽',
  [US_DOLLAR]: '$',
  [EURO]: '€',
};

export const currencyAliases: { [string]: string } = {
  [RUSSIAN_ROUBLE]: 'RUB',
  [US_DOLLAR]: 'USD',
  [EURO]: 'EUR',
};
