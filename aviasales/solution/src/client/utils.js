import { NODE_ENV } from '~/config'; // eslint-disable-line import/extensions, import/no-unresolved


export function pluralStops(number) {
  return `${number} пересадок`;
}

export function isProd() {
  return NODE_ENV === 'production';
}
