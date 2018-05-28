import { NODE_ENV } from 'config';

export function pluralStops(number) {
  return `${number} пересадок`;
}

export function isProd() {
  return NODE_ENV === 'production';
}

export function calculateCurrency() {

}
